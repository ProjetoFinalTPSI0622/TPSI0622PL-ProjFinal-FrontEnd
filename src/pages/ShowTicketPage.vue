<script setup>
import {ref, onMounted } from 'vue';
import { TicketService } from '../Services/TicketService.js';
import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TicketItem from '../components/ShowTicket/TicketItem.vue';
import TopMenu from '../components/ShowTicket/TopMenu.vue';

const tickets = ref([]);


onMounted(async () => {
    tickets.value = (await TicketService.getTickets()).tickets;
    await console.log(tickets.value);
});

</script>

<template>
    <div class="flex w-full">
        <SideFilter />
        <span class="flex flex-col w-full lg:w-[80%]">
            <TopMenu />
            <div class="flex flex-col flex-grow">
                <TicketItem v-for="ticket in tickets" :ticket="ticket" />
            </div>
        </span>
    </div>
</template>