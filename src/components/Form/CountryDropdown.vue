<template>
   <v-select :options="countries">
      <template slot="option" slot-scope="option">
         <span class="flag-icon flag-icon-squared" :class="['flag-icon-' + countries.value]"></span>
         <span class="flag-text">{{ countries.label }}</span>
      </template>
   </v-select>
</template>

<script>
import { useCountriesStore } from './../../Stores/CountriesStore'
import FlagIcon from 'vue-flag-icon'
import VueSelect from 'vue-select'

export default {
    components: {
        FlagIcon,
        VueSelect,
    },
    data() {
        return {
            countries: [],
        }
    },
    mounted() {
        const countriesStore = useCountriesStore();
        this.countries = countriesStore.countries;
    },
}
</script>

<style scoped>
@import "vue-select/dist/vue-select.css";
@import url('https://fonts.googleapis.com/css?family=Montserrat:300');

* {
   font-family: 'Montserrat';
}

body {
   background-color: #f1f1f1;
   text-rendering: optimizelegibility;
   -moz-osx-font-smoothing: grayscale;
   -moz-text-size-adjust: none;
}

h1,.muted {
   color: #2c3e5099;
}

.flag-text { margin-left: 10px; }

.v-select input[type=search] {
   /*background-color: #fff;*/
}

#app {
   max-width: 30em;
   margin: 1em auto;
}
</style>
