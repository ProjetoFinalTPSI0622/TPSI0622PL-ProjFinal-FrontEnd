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
          <div class="flex justify-end items-end w-full">
            <button class="text-sm text-white rounded-lg px-2 py-1.5" @click="createStatus(inputText, color)"
              :style="{ backgroundColor: color }">Criar Estado
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
            <div class="w-[60%] lg:w-[50%] xl:w-[85%] font-bold">Nome</div>
            <div class="w-full font-bold">Codigo Cor</div>
          </div>
          <li v-for="status in statuses" :key="status.id" class="list-none mt-3">
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
                  <UpdateButton type="submit" textButton="Editar" @click="openEditModal(status)"/>

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
                            <Colorpicker @updateColor="handleUpdateColorModal" />
                            <input v-model="editedStatus.color" class="border rounded-lg px-2 py-1 mb-2">
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-slot:footer>
                      <UpdateButton type="submit" textButton="Guardar" @click="updateStatus"/>
                      <DeleteButton type="submit" textButton="Apagar" @click="deleteStatus"/>
                    </template>
                  </Modal>
                <DeleteButton type="submit" textButton="Apagar" @click="deleteStatus(status.id)"/>
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
import DeleteButton from '../../Buttons/DeleteButton.vue';
import UpdateButton from '../../Buttons/UpdateButton.vue';

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

const handleUpdateColorModal = (newColor) => {
  editedStatus.value.color = newColor;
};

const createStatus = async (statusValue, colorValue) => {
  if (statusValue === '' || colorValue === '') {
    ToastStore().triggerToast('Preencha todos os campos', 'warning');
  } else {
    await StatusesService.createStatus({ name: statusValue, color: colorValue });
    loadData();
  }
};

const openEditModal = (status) => {
  StatusesService.getStatuses(status)
  editedStatus.value = { ...status };
  showModal.value = true;
};

const handleConfirmModal = async () => {
  updateStatus();
};

const handleCancelModal = () => {
  showModal.value = false;
};

const updateStatus = async () => {
  await StatusesService.updateStatus(editedStatus.value.id, {
    name: editedStatus.value.name,
    color: editedStatus.value.color
  });
  loadData();
  closeEditModal();
};

const closeEditModal = () => {
  showModal.value = false;
  editedStatus.value = { id: null, name: '', color: '' };
};

const deleteStatus = async (id) => {
  await StatusesService.deleteStatus(id);
  loadData();
};

</script>