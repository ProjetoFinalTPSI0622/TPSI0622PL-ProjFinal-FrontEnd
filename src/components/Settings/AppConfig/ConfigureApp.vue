<template>
  

  <!-- Config Estados -->
  <ConfigGroup>
    <FormTitle Title="Configuração de Estados" />
    <div class="bg-blue w-full h-px rounded my-3" />

    <div class="flex flex-col mt-3">
      <SubTitle SubTitle="Novo Estado" class="pl-5" />
      <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
        <div class="w-2/5">
          <Input LabelTitle="Titulo do Estado" type="text" required v-model="buttonText" />
        </div>
        <div class="flex">
          <Colorpicker :buttonText="buttonText" :color="color" @update:buttonText="updateButtonText" />
        </div>
      </div>
    </div>

    <hr class="my-5">

    <div class="flex flex-col mt-3">
      <SubTitle SubTitle="Editar Estado" class="pl-5" />
      <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
        <div class="w-2/5">
          <Dropdown LabelTitle="Estados Existentes" :options="status" v-model="selectedState"
            @update:model-value="handleStateDropdown" />
        </div>
      </div>
      <!-- <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10" v-if="selectedState">
        <div class="w-2/5">
          <Input LabelTitle="Titulo do Estado" type="text" required v-model="selectedState.name" />
        </div>
        <div class="flex">
          {{ selectedState.color }}
          {{ selectedState.name }}
          <Colorpicker :buttonText="selectedState.name" :color="selectedState.color" />
        </div>
      </div> -->
    </div>
  </ConfigGroup>


  <!-- Config Categorias -->
  <ConfigGroup class="mt-5">
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
        <div class="w-2/5">
          <Dropdown LabelTitle="Categorias Existentes" :options="category" v-model="selectedCategory"
            @update:model-value="handleCategoryDropdown"/>
        </div>
      </div>
      <!-- <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10 hidden">
        <div class="w-2/5">
          <Input LabelTitle="Titulo do Estado" type="text" required v-model="buttonText" />
        </div>
        <div class="flex">
          <Colorpicker :buttonText="buttonText" @update:buttonText="updateButtonText" />
        </div>
      </div> -->
    </div>
  </ConfigGroup>


  <!-- Config Localidades -->
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
        <div class="w-2/5">
          <Dropdown LabelTitle="Categorias Existentes" :options="category" v-model="selectedCategory"
            @update:model-value="handleCategoryDropdown"/>
        </div>
      </div>
      <!-- <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10 hidden">
        <div class="w-2/5">
          <Input LabelTitle="Titulo do Estado" type="text" required v-model="buttonText" />
        </div>
        <div class="flex">
          <Colorpicker :buttonText="buttonText" @update:buttonText="updateButtonText" />
        </div>
      </div> -->
    </div>
  </ConfigGroup>


</template>
  
<script setup>
import FormTitle from '../../Form/FormTitle.vue';
import SubTitle from '../../Form/SubTitle.vue';
import Input from '../../Form/Input.vue';
import ButtonSubmit from '../../Form/ButtonSubmit.vue';
import Colorpicker from './Colorpicker.vue';
import Dropdown from '../../Form/Dropdown.vue';
import ConfigGroup from '../../../layout/ConfigGroup.vue';

import { StatusesService } from '../../../Services/StatusesService';
import { CategoriesService } from '../../../Services/CategoriesService';
import { LocationsService } from '../../../Services/LocationsService';
import { onBeforeMount, ref } from 'vue';


const buttonText = ref('');
const status = ref([]);
const selectedState = ref(null);
const catName = ref('');
const category = ref([]);
const selectedCategory = ref(null);


onBeforeMount(async () => {
  await loadData();
});

const loadData = async () => {
  try {
    status.value = (await StatusesService.getStatuses()).data;
    category.value = (await CategoriesService.getCategories()).data;
    locations.value = (await LocationsService.getLocations()).data;
  } catch (error) {
    console.error('Error:', error.response);
  }
};

const updateButtonText = (newText) => {
  buttonText.value = newText;
};

const handleStateDropdown = (value) => {
  status.value.forEach((state) => {
    if (state.id === parseInt(value)) {
      selectedState.value = state;
    }
  });
};

const handleCategoryDropdown = (value) => {
  category.value.forEach((cat) => {
    if (cat.id === parseInt(value)) {
      selected.category = cat;
    }
  });
};

const createCategory = () => {
  CategoriesService.createCategory({ name: category.value });
};

const createLocation = () => {
  LocationsService.createLocation({ name: location.value });
};

</script>
  