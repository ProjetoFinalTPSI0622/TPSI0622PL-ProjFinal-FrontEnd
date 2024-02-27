<script setup>
import { ref, computed, watch, onBeforeMount } from 'vue';
import { UserService } from '@/Services/UserService';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore.js';
import { useAuthedUserStore } from '@/Stores/UserStore.js';
import { useTicketStore } from '@/Stores/TicketStore.js';

import SideFilter from '@/components/ShowTicket/SideFilter.vue';
import TopMenu from '@/components/ShowTicket/TopMenu.vue';
import TicketsTable from '@/components/ShowTicket/TicketsTable.vue';
import Modal from '@/components/Modal.vue';
import SimpleButton from '@/components/SimpleButton.vue';
import Previous from 'vue-material-design-icons/ChevronleftCircleOutline.vue'
import Next from 'vue-material-design-icons/ChevronRightCircleOutline.vue'

const tickets = ref([]);
const technicians = ref([]);
const currentPage = ref(1);
const ticketsPerPage = ref("All");
const searchTerm = ref('');

const authedUserStore = useAuthedUserStore();

const ticketStore = useTicketStore();
const TicketFilter = useTicketFilterStore();

const printPDF = () => {
    ticketStore.convertTicketsToPDF(tickets.value);
};

onBeforeMount(async () => {
    await fetchTickets();
    await getTechnicians();
});

const fetchTickets = async () => {
    try {
        tickets.value = await TicketFilter.getTickets();
    } catch (error) {
        console.error("Error fetching tickets:", error);
    }
};

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

const handleCancelModal = () => {
    ticketStore.handleCancelModal();
};

const handleConfirmModal = () => {
    ticketStore.handleConfirmModal();
};

const visiblePages = computed(() => {
    let pages = [];
    const total = totalPages.value;
    const current = currentPage.value;
    let startPage = Math.max(current - 1, 1);
    let endPage = startPage + 2;

    if (endPage > total) {
        endPage = total;
        startPage = Math.max(1, endPage - 2);
    }

    for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
    }

    return pages;
});

const displayedTickets = computed(() => {
    const filteredTickets = TicketFilter.filteredTickets;
    const startIndex = (currentPage.value - 1) * (ticketsPerPage.value === "All" ? filteredTickets.length : ticketsPerPage.value);
    const endIndex = startIndex + (ticketsPerPage.value === "All" ? filteredTickets.length : ticketsPerPage.value);
    return filteredTickets.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return ticketsPerPage.value === "All" ? 1 : Math.ceil(TicketFilter.filteredTickets.length / ticketsPerPage.value);
});

const changePage = (page) => {
    currentPage.value = page;
    if (ticketsPerPage.value !== "All") {
        ticketsPerPage.value = Number(ticketsPerPage.value);
    }
};

watch(searchTerm, () => {
    currentPage.value = 1;
});

const convertTicketsToPDF = () => {
    ticketStore.convertTicketsToPDF();
};

</script>

<template>
    <div class="flex w-full overflow-auto">
        <div v-if="authedUserStore.isLoading"></div>
        <div v-else class="flex w-full">
            <SideFilter v-if="authedUserStore.userRole === 'technician' || authedUserStore.userRole === 'admin'" />

            <span class="flex flex-col w-full">

                <TopMenu @exportToPdf="convertTicketsToPDF" />

                <span class="flex justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
                    <div class="text-black text-opacity-60 sm:text-xl">{{ TicketFilter.filteredTickets.length }} Tickets
                    </div>
                    <div class="flex gap-1 sm:gap-2.5">
                        <select v-model="ticketsPerPage" @change="changePage(1)" class="cursor-pointer">
                            <option value="5">5 por pagina</option>
                            <option value="10">10 por pagina</option>
                            <option value="20">20 por pagina</option>
                            <option value="All">All</option>
                        </select>

                        <span v-for="page in visiblePages"
                            :class="['text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer',
                                { 'bg-purple text-white hoverBlue': page === currentPage, 'aspect-[0.8148148148148148]': true }]" :key="page"
                            @click="changePage(page)">
                            {{ page }}
                        </span>
                    </div>
                </span>

                <TicketsTable id="ticketsTable" :tickets="displayedTickets" :technicians="technicians" />

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
    </div>
</template>