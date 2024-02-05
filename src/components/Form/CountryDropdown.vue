<template>
    <div class=" flex grow basis-[0%] flex-col">
        <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
      <select v-model="selectedCountry" label="name" class="bg-white text-purple text-base text-wrap border border-solid border-purple rounded-lg">
          <option value="" disabled selected>Select your option</option>

          <option v-for="country in countries" :key="country.id" :value="country.id" selected>
            {{ country.name }}
          </option>



          <!---------------------------------TODO: COMENTEI PORQUE NAO ESTA A FAZER NADA FIX IT LATER--------------------------------->
<!--            <template>-->
<!--                <span :class="'flag-icon flag-icon-' + countries.code.toLowerCase()"> {{ countries.code }} </span>-->
<!--                <span class="flag-text">{{ countries.name }}</span>-->
<!--            </template>-->
        </select>
    </div>
</template>
  
<script setup>
import { UserService } from '../../Services/UserService';
import {onMounted, ref} from "vue";


const props = defineProps({
    LabelTitle: {
        type: String,
        required: true
    },
});

const selectedCountry = ref(null);
const countries = ref([]);

onMounted(async () => {
    countries.value = (await UserService.getCountries()).data;
    console.log(countries.value);
});

</script>
