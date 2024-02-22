<template>
    <ConfigGroup>
        <FormTitle Title="Configuração de Categorias" />
        <div class="bg-blue w-full h-px rounded my-3" />

        <div class="flex flex-col mt-3">
            <SubTitle SubTitle="Nova Categoria" class="md:pl-5" />
            <div class="mt-5 w-full flex flex-col md:flex-row gap-5 justify-between px-5 md:px-10">
                <div class="w-full md:w-2/5">
                    <Input LabelTitle="Titulo da Categoria" type="text" required v-model="inputText" />
                </div>
                <div class="flex justify-end gap-2.5">
                    <CreateButton type="submit" textButton="Criar Categoria" @click="createCategory(inputText)" />
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