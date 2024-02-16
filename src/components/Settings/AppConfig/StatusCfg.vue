<template>
<ConfigGroup>
    <FormTitle Title="Configuração de Estados" />
    <div class="bg-blue w-full h-px rounded my-3" />

    <div class="flex flex-col mt-3">
      <SubTitle SubTitle="Criar Estado" class="pl-5" />
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
      <SubTitle SubTitle="Estados" class="pl-5" />
      <div class="mt-5 w-full flex flex-row gap-5 justify-between px-10">
        <div class="w-full">
          <li v-for="status in statuses" :key="status.id" class="list-none">
            <div class="flex justify-between my-2">
              <div class="flex w-full text-sm">
                  {{ status.name }}
              </div>
              <div class="flex w-full text-sm">
                  {{ status.color }} 
              </div>
              <div class="flex gap-2.5">
                <button class="text-xs bg-green-400 rounded-lg px-2 py-1.5" @click="editStatus">Editar</button>
                <button class="text-xs bg-red-400 rounded-lg px-2 py-1.5" @click="deleteStatus">Apagar</button>
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
import { StatusesService } from '../../../Services/StatusesService';

const buttonText = ref('');

const statuses = ref([]);
const selectedStatus = ref(null);

onBeforeMount(async () => {
  await loadData();
});

const loadData = async () => {
  try {
    statuses.value = (await StatusesService.getStatuses()).data;
    // categories.value = (await CategoriesService.getCategories()).data;
    // locations.value = (await LocationsService.getLocations()).data;
  } catch (error) {
    console.error('Error:', error.response);
  }
};

const updateButtonText = (newText) => {
  buttonText.value = newText;
};


const deleteStatus = async () => {
  try {
    console.log(selectedStatus);
    await StatusesService.deleteStatus(selectedStatus);
    loadData();
  } catch (error) {
    console.error('Error:', error.response);
  }
};
</script>