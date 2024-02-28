<template>
    <ConfigGroup>
        <FormTitle Title="Configuração de Localização" />
        <div class="bg-blue w-full h-px rounded my-3" />

        <div class="flex flex-col mt-3">
            <SubTitle SubTitle="Nova Localização" class="md:pl-5" />
            <div class="mt-5 w-full flex flex-col md:flex-row gap-5 justify-between px-5 md:px-10">
                <div class="w-full md:w-2/5">
                    <Input LabelTitle="Titulo da Localização" type="text" required v-model="inputText" />
                </div>
                <div class="flex justify-end gap-2.5">
                    <CreateButton type="submit" textButton="Criar Localização" @click="createLocation(inputText)" />
                </div>
            </div>
        </div>

        <hr class="my-5">

        <div class="flex flex-col mt-3">
            <SubTitle SubTitle="Localizações" class="md:pl-5" />
            <div class="mt-5 w-full flex flex-row gap-5 justify-between px-3 md:px-10">
                <div class="w-full">
                    <div class="flex flex-row">
                        <div class="w-[60%] lg:w-[50%] xl:w-[85%] font-bold">Nome</div>
                    </div>
                    <li v-for="location in locations" :key="location.id" class="list-none mt-3">
                        <div class="flex justify-between my-2">
                            <div class="flex flex-row justify-between w-full">
                                <div class="flex w-full text-sm items-center">
                                    {{ location.name }}
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row gap-2.5">
                                <UpdateButton type="submit" textButton="Editar" @click="openEditModal(location)" />

                                <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
                                    <template v-slot:title>Editar Localização</template>
                                    <template v-slot:content>
                                        <div class="flex gap-5">
                                            <div class="flex flex-col">
                                                <p class="pl-2">Nome</p>
                                                <input v-model="editedLocation.name"
                                                    class="border rounded-lg px-2 py-1 mb-2">
                                            </div>
                                        </div>
                                    </template>
                                    <template v-slot:footer>
                                        <UpdateButton type="submit" textButton="Guardar" @click="updateLocation" />
                                        <DeleteButton type="submit" textButton="Apagar" @click="deleteLocation" />
                                    </template>
                                </Modal>
                                <DeleteButton type="submit" textButton="Apagar" @click="deleteLocation(location.id)" />
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
  import { LocationsService } from '../../../Services/LocationsService';
  import ToastStore from '@/Stores/ToastStore.js';
  import Modal from '@/components/Modal.vue';
  import CreateButton from '../../Buttons/CreateButton.vue';
  import DeleteButton from '../../Buttons/DeleteButton.vue';
  import UpdateButton from '../../Buttons/UpdateButton.vue';
  
  const inputText = ref('');
  const locations = ref([]);
  const showModal = ref(false);
  const editedLocation = ref({
    id: null,
    name: '',
  });
  
  onBeforeMount(async () => {
    await loadData();
  });
  
  const loadData = async () => {
    locations.value = (await LocationsService.getLocations()).data;
  };
  
  const createLocation = async (locationValue) => {
    if (locationValue === '') {
      ToastStore().triggerToast('Preencha todos os campos', 'warning');
    } else {
      await LocationsService.createLocation({ name: locationValue });
      loadData();
    }
  };
  
  const openEditModal = (location) => {
    LocationsService.getLocations(location)
    editedLocation.value = { ...location };
    showModal.value = true;
  };
  
  const handleConfirmModal = async () => {
    updateLocation();
  };
  
  const handleCancelModal = () => {
    showModal.value = false;
  };
  
  const updateLocation = async () => {
    await LocationsService.updateLocation(editedLocation.value.id, {
      name: editedLocation.value.name
    });
    loadData();
    closeEditModal();
  };
  
  const closeEditModal = () => {
    showModal.value = false;
    editedLocation.value = { id: null, name: '' };
  };
  
  const deleteLocation = async (id) => {
    await LocationsService.deleteLocation(id);
    loadData();
  };
  
  </script>