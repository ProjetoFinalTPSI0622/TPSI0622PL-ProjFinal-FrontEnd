<template>
    <ConfigGroup>
        <FormTitle Title="Configuração de Categorias" />
        <div class="bg-blue w-full h-px rounded my-3" />
        <SubTitle SubTitle="Nova Categoria" class="pl-5" />
        <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
            <div class="w-2/5">
                <Input LabelTitle="Nova Categoria" type="text" required modelValue="" />
            </div>
            <div class="flex">
                <CreateButton type="submit" textButton="Criar Categoria" @click="createCategory"/>
            </div>
        </div>
        <hr class="my-5">
        <div class="flex flex-col mt-3">
            <SubTitle SubTitle="Editar Categoria" class="pl-5" />
            <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
                <div class="w-full">
                    <li v-for="category in categories" :key="category.id" class="list-none">
                        <div class="flex justify-between my-2">
                            <div class="flex w-full text-sm">
                                {{ category.id }}
                            </div>
                            <div class="flex w-full text-sm">
                                {{ category.name }}
                            </div>
                            <div class="flex gap-2.5">
                                <UpdateButton type="submit" textButton="Editar" @click="editStatus"/>
                                <DeleteButton type="submit" textButton="Apagar" @click="deleteStatus"/>
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
import CreateButton from '../../Buttons/CreateButton.vue';
import UpdateButton from '../../Buttons/UpdateButton.vue';
import DeleteButton from '../../Buttons/DeleteButton.vue';
import { CategoriesService } from '../../../Services/CategoriesService';

const categories = ref([]);

onBeforeMount(async () => {
    await loadData();
});

const loadData = async () => {
    try {
        categories.value = (await CategoriesService.getCategories()).data;
    } catch (error) {
        console.error('Error:', error.response);
    }
};

const createCategory = () => {
    CategoriesService.createCategory({ name: category.value });
};

</script>
