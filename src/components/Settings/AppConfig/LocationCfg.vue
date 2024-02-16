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