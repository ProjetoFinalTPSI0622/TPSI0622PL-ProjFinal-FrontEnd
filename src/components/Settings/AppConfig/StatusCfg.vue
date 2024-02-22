<template>
  <ConfigGroup>
    <FormTitle Title="Configuração de Estados" />
    <div class="bg-blue w-full h-px rounded my-3" />

    <div class="flex flex-col mt-3">
      <SubTitle SubTitle="Novo Estado" class="md:pl-5" />
      <div class="mt-5 w-full flex flex-col md:flex-row gap-5 justify-between px-5 md:px-10">
        <div class="w-full md:w-2/5">
          <Input LabelTitle="Titulo do Estado" type="text" required v-model="inputText" />
        </div>
        <div class="flex justify-end gap-2.5">
          <Colorpicker @updateColor="handleUpdateColor" />
          <div class="flex items-end w-full">
            <button class="text-sm text-white rounded-lg px-2 py-1.5" @mouseover="hoverText(inputText)"
              @click="createStatus(inputText, color)" :style="{ backgroundColor: color }">Criar Estado
            </button>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="flex flex-col mt-3">
      <SubTitle SubTitle="Estados" class="md:pl-5" />
      <div class="mt-5 w-full flex flex-row gap-5 justify-between px-3 md:px-10">
        <div class="w-full">
          <div class="flex flex-row">
            <div class="w-[60%] lg:w-[70%] xl:w-[85%] font-bold">Nome</div>
            <div class="w-full font-bold">Codigo Cor</div>
          </div>
          <li v-for="status in statuses" :key="status.id" class="list-none mt-5">
            <div class="flex justify-between my-2">
              <div class="flex flex-row justify-between w-full">
                <div class="flex w-full text-sm items-center">
                  {{ status.name }}
                </div>
                <div class="flex w-full text-sm items-center uppercase">
                  {{ status.color }}
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-2.5">
                <!-- <button class="text-xs bg-green-400 rounded-lg px-2 py-1.5"
                  @click="updateStatus(status.id)">Editar</button> -->
                <div>
                  <button class="text-xs bg-green-400 rounded-lg px-2 py-1.5"
                    @click="openEditModal(status.id)">Editar</button>

                  <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
                    <template v-slot:title>Editar Estado</template>
                    <template v-slot:content>
                      <div class="flex gap-5">
                        <div class="flex flex-col">
                          <p class="pl-2">Nome</p>
                          <input v-model="editedStatus.name" class="border rounded-lg px-2 py-1 mb-2">
                        </div>
                        <div class="flex flex-col">
                          <p class="pl-2">Cor</p>
                          <div class="flex">
                            <Colorpicker @updateColor="handleUpdateColor" />
                            <input v-model="editedStatus.color" class="border rounded-lg px-2 py-1 mb-2">
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-slot:footer>
                      <button @click="updateStatus" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Salvar</button>
                      <button @click="closeEditModal" class="bg-gray-300 px-4 py-2 rounded-lg ml-2">Cancelar</button>
                    </template>
                  </Modal>
                </div>
                <button class="text-xs bg-red-400 rounded-lg px-2 py-1.5" @click="deleteStatus(status.id)">Apagar</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </ConfigGroup>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import ConfigGroup from '../../../layout/ConfigGroup.vue';
import FormTitle from '../../Form/FormTitle.vue';
import SubTitle from '../../Form/SubTitle.vue';
import Input from '../../Form/Input.vue';
import Colorpicker from '../../Settings/AppConfig/colorpicker.vue';
import { StatusesService } from '@/Services/StatusesService.js';
import ToastStore from '@/Stores/ToastStore.js';
import Modal from '@/components/Modal.vue';

const inputText = ref('');
const color = ref("#25183E");
const statuses = ref([]);
const showModal = ref(false);
const editedStatus = ref({
  id: null,
  name: '',
  color: ''
});

onBeforeMount(async () => {
  await loadData();
});

const loadData = async () => {
  statuses.value = (await StatusesService.getStatuses()).data;
};

const handleUpdateColor = (newColor) => {
  color.value = newColor;
};

// const hoverText = (inputText) => {
//   console.log(inputText);
//   // inputText = inputText;
// };

const createStatus = async (statusValue, colorValue) => {
  if (statusValue === '' || colorValue === '') {
    ToastStore().triggerToast('Preencha todos os campos', 'warning');
  } else {
    await StatusesService.createStatus({ name: statusValue, color: colorValue });
    loadData();
  }
};

const openEditModal = (id) => {
  // Carregar valores atuais do status com base no ID
  StatusesService.getStatuses(id).then((status) => {
    // editedStatus.value = { ...status };
    showModal.value = true;
  });
};

const handleConfirmModal = async () => {
  updateStatus();
};

const handleCancelModal = () => {
  showModal.value = false;
};

const updateStatus = async () => {
  try {
    await StatusesService.updateStatus(editedStatus.value.id, {
      name: editedStatus.value.name,
      color: editedStatus.value.color
    });
    loadData();
    closeEditModal();
  } catch (error) {
    console.error('Error:', error.response);
  }
};

const closeEditModal = () => {
  showEditModal.value = false;
  editedStatus.value = { id: null, name: '', color: '' };
};

const deleteStatus = async (id) => {
  await StatusesService.deleteStatus(id);
  loadData();
};

</script>