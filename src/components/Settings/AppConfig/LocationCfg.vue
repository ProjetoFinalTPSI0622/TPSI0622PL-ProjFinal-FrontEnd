<template>
    <ConfigGroup class="mt-5">
        <FormTitle Title="Configuração de Localidades" />
        <div class="bg-blue w-full h-px rounded my-3" />
        <SubTitle SubTitle="Nova Localidade" class="pl-5" />
        <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
            <div class="w-2/5">
                <Input LabelTitle="Localidades" type="text" required v-model="loc" />
            </div>
            <div class="flex">
                <ButtonSubmit textButton="Guardar" type="submit" @click="createLocation" class="mx-10" />
            </div>
        </div>

        <hr class="my-5">

        <div class="flex flex-col mt-3">
            <SubTitle SubTitle="Editar Localidade" class="pl-5" />
            <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
                <div class="w-full">
                    <li v-for="location in locations" :key="location.id" class="list-none">
                        <div class="flex justify-between my-2">
                            <div class="flex w-full text-sm">
                                {{ location.id }}
                            </div>
                            <div class="flex w-full text-sm">
                                {{ location.name }}
                            </div>
                            <div class="flex gap-2.5">
                                <button type="submit" @click="editLocation" class="text-xs bg-green-400 rounded-lg px-2 py-1.5">Editar</button>
                                <button type="submit" @click="editLocation" class="text-xs bg-red-400 rounded-lg px-2 py-1.5">Apagar</button>
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

const locations = ref([]);
const selectedLocation = ref(null);

onBeforeMount(async () => {
    await loadData();
});

const loadData = async () => {
    try {
        locations.value = (await LocationsService.getLocations()).data;
    } catch (error) {
        console.error('Error:', error.response);
    }
};
</script>

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
            <SubTitle SubTitle="Categorias" class="md:pl-5" />
            <div class="mt-5 w-full flex flex-row gap-5 justify-between px-3 md:px-10">
                <div class="w-full">
                    <div class="flex flex-row">
                        <div class="w-[60%] lg:w-[50%] xl:w-[85%] font-bold">Nome</div>
                    </div>
                    <li v-for="category in categories" :key="category.id" class="list-none mt-3">
                        <div class="flex justify-between my-2">
                            <div class="flex flex-row justify-between w-full">
                                <div class="flex w-full text-sm items-center">
                                    {{ category.name }}
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row gap-2.5">
                                <UpdateButton type="submit" textButton="Editar" @click="openEditModal(category)" />

                                <Modal :show="showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
                                    <template v-slot:title>Editar Categoria</template>
                                    <template v-slot:content>
                                        <div class="flex gap-5">
                                            <div class="flex flex-col">
                                                <p class="pl-2">Nome</p>
                                                <input v-model="editedCategory.name"
                                                    class="border rounded-lg px-2 py-1 mb-2">
                                            </div>
                                        </div>
                                    </template>
                                    <template v-slot:footer>
                                        <UpdateButton type="submit" textButton="Guardar" @click="updateCategory" />
                                        <DeleteButton type="submit" textButton="Apagar" @click="deleteCategory" />
                                    </template>
                                </Modal>
                                <DeleteButton type="submit" textButton="Apagar" @click="deleteCategory(category.id)" />
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
  import { CategoriesService } from '../../../Services/CategoriesService';
  import ToastStore from '@/Stores/ToastStore.js';
  import Modal from '@/components/Modal.vue';
  import CreateButton from '../../Buttons/CreateButton.vue';
  import DeleteButton from '../../Buttons/DeleteButton.vue';
  import UpdateButton from '../../Buttons/UpdateButton.vue';
  
  const inputText = ref('');
  const categories = ref([]);
  const showModal = ref(false);
  const editedCategory = ref({
    id: null,
    name: '',
  });
  
  onBeforeMount(async () => {
    await loadData();
  });
  
  const loadData = async () => {
    categories.value = (await CategoriesService.getCategories()).data;
  };
  
  const createCategory = async (categoryValue) => {
    if (categoryValue === '') {
      ToastStore().triggerToast('Preencha todos os campos', 'warning');
    } else {
      await CategoriesService.createCategory({ name: categoryValue });
      loadData();
    }
  };
  
  const openEditModal = (category) => {
    CategoriesService.getCategories(category)
    editedCategory.value = { ...category };
    showModal.value = true;
  };
  
  const handleConfirmModal = async () => {
    updateCategory();
  };
  
  const handleCancelModal = () => {
    showModal.value = false;
  };
  
  const updateCategory = async () => {
    await CategoriesService.updateCategory(editedCategory.value.id, {
      name: editedCategory.value.name
    });
    loadData();
    closeEditModal();
  };
  
  const closeEditModal = () => {
    showModal.value = false;
    editedCategory.value = { id: null, name: '' };
  };
  
  const deleteCategory = async (id) => {
    await CategoriesService.deleteCategory(id);
    loadData();
  };
  
  </script>