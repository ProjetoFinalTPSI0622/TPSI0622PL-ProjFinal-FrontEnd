<script setup>

import { onMounted, ref, computed, watch } from 'vue';
import { TicketService } from '../Services/TicketService.js';
import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TicketItem from '../components/ShowTicket/TicketItem.vue';
import TopMenu from '../components/ShowTicket/TopMenu.vue';
import TicketsTable from '../components/ShowTicket/TicketsTable.vue';

const tickets = ref([]);
const currentPage = ref(1);
const ticketsPerPage = ref(1);
const searchTerm = ref('');

onMounted(async () => {
    tickets.value = (await TicketService.getTickets()).tickets;
    await console.log(tickets.value);
});

//Obtem os usuários que serão exibidos na página atual
const displayedTickets = computed(() => {
    const filteredTickets = tickets.value.filter((ticket) => {
        return ticket.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            ticket.requester.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            ticket.assignee.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
            ticket.status.toLowerCase().includes(searchTerm.value.toLowerCase());
    });

    const startIndex = (currentPage.value - 1) * ticketsPerPage.value;
    const endIndex = startIndex + ticketsPerPage.value;
    return filteredTickets.slice(startIndex, endIndex);
});

//Obtem o número total de páginas
const totalPages = computed(() => {
    return Math.ceil(tickets.value.length / ticketsPerPage.value);
});

//Muda a página atual
const changePage = (page) => {
    currentPage.value = page;
};

watch(searchTerm, () => {
    currentPage.value = 1;
});
</script>

<template>
    <div class="flex w-full">
        <SideFilter />
        <span class="flex flex-col w-full lg:w-[80%]">
            <TopMenu :searchTerm="searchTerm" @update:searchTerm="searchTerm = $event" />
            <span class="flex justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
                <div class="text-black text-opacity-60 sm:text-xl">{{ tickets.length }} Tickets</div>
                <div class="flex sm:gap-2.5">
                    <span v-for="page in totalPages" :class="['text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer',
                        { 'bg-purple text-white': page === currentPage, 'aspect-[0.8148148148148148]': true }]"
                        :key="page" @click="changePage(page)">
                        {{ page }}
                    </span>
                </div>
            </span>

            <TicketsTable :tickets="displayedTickets" />
        </span>
    </div>
</template>