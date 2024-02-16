<template>
    <ConfigGroup>
        <FormTitle Title="Configuração de Categorias" />
        <div class="bg-blue w-full h-px rounded my-3" />
        <SubTitle SubTitle="Nova Categoria" class="pl-5" />
        <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
            <div class="w-2/5">
                <Input LabelTitle="Nova Categoria" type="text" required v-model="catName" />
            </div>
            <div class="flex">
                <ButtonSubmit textButton="Guardar" type="submit" @click="createCategory" class="mx-10" />
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
                                <button class="text-xs bg-green-400 rounded-lg px-2 py-1.5"
                                    @click="editStatus">Editar</button>
                                <button class="text-xs bg-red-400 rounded-lg px-2 py-1.5"
                                    @click="deleteStatus">Apagar</button>
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

const categories = ref([]);
const selectedCategory = ref(null);

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

// const handleCategoryDropdown = (value) => {
//   category.value.forEach((cat) => {
//     if (cat.id === parseInt(value)) {
//       selected.category = cat;
//     }
//   });
// };


</script>
