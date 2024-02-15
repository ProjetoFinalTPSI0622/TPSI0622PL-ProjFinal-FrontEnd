<script setup>
import { onMounted, ref, computed, watch, onBeforeMount } from 'vue';
import { UserService } from '@/Services/UserService';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore.js';

import SideFilter from '@/components/ShowTicket/SideFilter.vue';
import TopMenu from '@/components/ShowTicket/TopMenu.vue';
import TicketsTable from '@/components/ShowTicket/TicketsTable.vue';
import Modal from '@/components/Modal.vue';
import SimpleButton from '@/components/SimpleButton.vue';

import { useTicketStore } from '@/Stores/TicketStore.js';


const tickets = ref([]);
const technicians = ref([]);
const currentPage = ref(1);
const ticketsPerPage = ref(5);
const searchTerm = ref('');

let currentUser = ref(null);

const ticketStore = useTicketStore();
const TicketFilter = useTicketFilterStore();

const printPDF = () => {
    ticketStore.convertTicketsToPDF(tickets.value);
};

onBeforeMount(async () => {
    try {
        tickets.value = await TicketFilter.getTickets;
    } catch (error) {
        console.error("Erro ao procurar tickets:", error);
    }

    try {
        currentUser.value = await UserService.getAuthedUser();
    } catch (error) {
        console.error("Erro ao procurar user:", error);
    }

    try {
        await getTechnicians();
    } catch (error) {
        console.error("Erro ao procurar técnicos:", error);
    }
});

const handleCancelModal = () => {
    ticketStore.handleCancelModal();
};

const handleConfirmModal = () => {
    ticketStore.handleConfirmModal();
};

const displayedTickets = computed(() => {
    const filteredTickets = TicketFilter.filteredTickets;
    const startIndex = (currentPage.value - 1) * ticketsPerPage.value;
    const endIndex = startIndex + ticketsPerPage.value;
    return filteredTickets.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(TicketFilter.filteredTickets.length / ticketsPerPage.value);
});

const changePage = (page) => {
    currentPage.value = page;
};

watch(searchTerm, () => {
    currentPage.value = 1;
});

const getTechnicians = async () => {
    try {
        const response = (await UserService.getTechnicians());
        if (response.success) {
            technicians.value = response.data;
        } else {
            console.error('Invalid response structure:', response);
        }
    } catch (error) {
        console.error('Error fetching technicians:', error);
    }
};

</script>

<template>
    <div class="flex w-full">

        <SideFilter />

        <span class="flex flex-col w-full lg:w-[80%]">

            <TopMenu />

            <span class="flex justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
                <div class="text-black text-opacity-60 sm:text-xl">{{ TicketFilter.filteredTickets.length }} Tickets</div>
                <div class="flex gap-1 sm:gap-2.5">
                    <select v-model="ticketsPerPage" @change="changePage(1)">
                        <option value="5">5 por pagina</option>
                        <option value="10">10 por pagina</option>
                        <option value="20">20 por pagina</option>
                        <option :value="TicketFilter.filteredTickets.length">All</option>
                    </select>
                    <span v-for="page in totalPages" :class="['text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer',
                        { 'bg-purple text-white': page === currentPage, 'aspect-[0.8148148148148148]': true }]"
                        :key="page" @click="changePage(page)">
                        {{ page }}
                    </span>

                </div>
            </span>

            <TicketsTable :tickets="displayedTickets" :technicians="technicians" />

            <div class="hidden sm:flex pr-5 py-2 justify-end fixed bottom-0 w-[94vw] lg:w-[74vw] xl:w-[77vw] bg-white border-t border-black border-solid border-opacity-30">
                <SimpleButton @click="printPDF">Convert to PDF </SimpleButton>
            </div>

            <Modal :show="ticketStore.showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
                <template #title>
                    Assign Technician
                </template>
                <template #content>
                    You are about to assign {{ ticketStore.selectedTechnician }} to this ticket, are you sure?
                </template>
            </Modal>
        </span>
    </div>
</template>