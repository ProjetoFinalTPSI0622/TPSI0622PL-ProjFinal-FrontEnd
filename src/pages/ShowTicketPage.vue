<script setup>
import { onMounted, ref, computed, watch, onBeforeMount } from 'vue';
import { TicketsService } from '../Services/TicketsService.js';
import { UserService } from '../Services/UserService';

import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TopMenu from '../components/ShowTicket/TopMenu.vue';
import TicketsTable from '../components/ShowTicket/TicketsTable.vue';

const tickets = ref([]);
const currentPage = ref(1);
const ticketsPerPage = ref(5);
const searchTerm = ref('');
const status = ref('All');
const creator = ref('All');
const assignee = ref('All');

let currentUser = ref(null);

onBeforeMount(async () => {
    try {
        tickets.value = (await TicketsService.getTickets()).data;
        currentUser.value = await UserService.getAuthedUser();
    } catch (error) {
        console.error("Erro ao procurar usuários:", error);
    }
});


const displayedTickets = computed(() => {
    let filteredTickets = tickets.value.filter((ticket) => {
        const title = ticket.title ? ticket.title.toLowerCase() : '';
        const requester = ticket.createdby ? ticket.createdby.name.toLowerCase() : '';
        const assignee = ticket.assignedto ? ticket.assignedto.name.toLowerCase() : '';

        return title.includes(searchTerm.value.toLowerCase()) ||
            requester.includes(searchTerm.value.toLowerCase()) ||
            assignee.includes(searchTerm.value.toLowerCase());
    });

    if (status.value !== 'All') {
        filteredTickets = filteredTickets.filter(ticket => ticket.status.status_name === status.value);
    }

    if (creator.value === 'Me' && currentUser.value && currentUser.value.success) {
        filteredTickets = filteredTickets.filter(ticket => ticket.createdby.id === currentUser.value.user.id);
    }

    if (assignee.value === 'Me' && currentUser.value && currentUser.value.success) {
        filteredTickets = filteredTickets.filter(ticket => ticket.assignedto.id === currentUser.value.user.id);
    }

    const startIndex = (currentPage.value - 1) * ticketsPerPage.value;
    const endIndex = startIndex + ticketsPerPage.value;
    return filteredTickets.slice(startIndex, endIndex);
});


const totalPages = computed(() => {
    return Math.ceil(displayedTickets.value.length / ticketsPerPage.value);
});

const changePage = (page) => {
    currentPage.value = page;
};

watch(searchTerm, () => {
    currentPage.value = 1;
});

const updateStatus = (newStatus) => {
    status.value = newStatus;
    currentPage.value = 1;
};

const updateCreator = (newCreator) => {
    creator.value = newCreator === 'Me' ? 'Me' : 'All';
    currentPage.value = 1;
};

const updateAssignee = (newAssignee) => {
    assignee.value = newAssignee === 'Me' ? 'Me' : 'All';
    currentPage.value = 1;
};

</script>

<template>
    <div class="flex w-full">

        <SideFilter @update:status="updateStatus" @update:creator="updateCreator" @update:assignee="updateAssignee" />

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