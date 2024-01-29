<template>
    <div class=" flex grow basis-[0%] flex-col">
        <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
        <v-select :options="countries" label="name" class="bg-white text-purple text-base text-wrap border border-solid border-purple rounded-lg">
            <template>
                <span :class="'flag-icon flag-icon-' + countries.code.toLowerCase()"> {{ countries.code }} </span>
                <span class="flag-text">{{ countries.name }}</span>
            </template>
        </v-select>
    </div>
</template>
  
<script>
import { UserService } from '../../Services/UserService';

export default {
    props: {
        LabelTitle: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            selectedCountry: null,
            countries: [],
        };
    },
    async mounted() {
        this.countries = (await UserService.getCountries()).data;
    }
};
</script>