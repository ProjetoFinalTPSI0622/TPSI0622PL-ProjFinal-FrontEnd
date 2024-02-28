<script setup>

import { ref } from 'vue';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore.js';

const ticketFilterStore = useTicketFilterStore();
const searchTerm = ref('');

const handleFilterChange = (filterName, value) => {
    ticketFilterStore.handleFilterChange(filterName, value);
};

</script>
    
<template>
    <span
        class="border bg-white flex justify-between w-40 lg:w-60 py-1 lg:py-0 lg:px-2.5 rounded-xl border-solid border-black border-opacity-20">
        <img loading="lazy"
            src="@/assets/search.svg"
            class="aspect-[1.5] object-contain object-center" />
        <input type="text"
            class="bg-transparent text-gray-900 focus:outline-none focus-visible:outline-none rounded-lg w-full lg:p-2"
            placeholder="Procurar... " v-model="searchTerm" @input="handleFilterChange('searchTerm', searchTerm)">
    </span>
</template>
