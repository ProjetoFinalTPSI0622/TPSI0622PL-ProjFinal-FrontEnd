<template>
      <div class="bg-grey rounded-md p-5">
        <FormTitle FormTitle="Criação de Novo Estado" />
        <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
          <div class="w-2/5">
            <Input LabelTitle="Titulo do Estado" type="text" required v-model="buttonText" />
          </div>
          <div class="flex">
            <Colorpicker 
                :buttonText="buttonText" 
                @update:buttonText="updateButtonText" />
          </div>
        </div>
      </div>
  
      <div class="bg-grey rounded-md p-5 mt-5">
        <FormTitle FormTitle="Editar Estados" />
        <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
            <div class="w-2/5">
                <Dropdown 
                LabelTitle="Estados Existentes" 
                :options="states" 
                v-model="selected.state" 
                @update:model-value="handleDropdownChange" />
            </div>
        </div>
      </div>
  </template>
  
<script setup>
import FormTitle from '../../Form/FormTitle.vue';
import Input from '../../Form/Input.vue';
import Colorpicker from './Colorpicker.vue';
import Dropdown from '../../Form/Dropdown.vue';
import { StatesService } from '../../../Services/StatesService';
import { onBeforeMount, ref} from 'vue';

const buttonText = ref('');
const states = ref([]);
const selected = ref({ state: '' });


onBeforeMount(async () => {
  await loadData();
});

const loadData = async () => {
  try {
    states.value = (await StatesService.getStates()).data;
  } catch (error) {
    console.error('Error:', error.response);
  }
};

const handleDropdownChange = (value) => {
  const key = Object.keys(value)[0];
  selected[key] = value[key]; 
};

const updateButtonText = (newText) => {
  buttonText.value = newText;
};
</script>
  