<script setup>
import { defineEmits } from 'vue';
import SimpleButton from '../SimpleButton.vue';
import SearchBox from '../SearchBox.vue';
import { RouterLink } from 'vue-router';
import FilterDropdown from '@/components/ShowTicket/FilterDropdown.vue';

const emits = defineEmits(['exportToPdf']);
</script>

<template>
    <span
        class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-4 h-[9vh] border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div>Todos os Tickets</div>
        <div class="flex gap-4">
            <SimpleButton class="hidden lg:block" @click="emits('exportToPdf')">Exportar Para PDF</SimpleButton>
            <router-link to="/tickets/create">
                <SimpleButton> + Criar Ticket </SimpleButton>
            </router-link>
        </div>
    </span>

    <div class="flex flex-row justify-end lg:justify-between p-3 border-b-black border-b-opacity-30 border-b border-solid items-start">
        <div class="hidden lg:flex flex-col sm:flex-row items-center gap-2">
            <FilterDropdown/>
        </div>

        <SearchBox />
    </div>
</template>