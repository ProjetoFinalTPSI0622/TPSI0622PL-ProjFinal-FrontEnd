<script setup>
import { ref, onMounted } from 'vue';
import { getTickets } from '../services/TicketService.js';
import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TicketItem from '../components/ShowTicket/TicketItem.vue';
import TopMenu from '../components/ShowTicket/TopMenu.vue';

const tickets = ref([]);

onMounted(async () => {
    tickets.value = await getTickets();
});
</script>

<template>
    <div class="flex w-full">
        <SideFilter />
        <span class="flex flex-col w-full lg:w-[80%]">
            <TopMenu />
            <div class="flex flex-col flex-grow">
                <TicketItem v-for="(ticket, index) in tickets" :key="index" :ticket="ticket" />
            </div>
        </span>
    </div>
</template>