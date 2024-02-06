<script setup>
import { onMounted, ref, computed, watch, onBeforeMount } from 'vue';
import { TicketsService } from '../Services/TicketsService.js';
import { UserService } from '../Services/UserService';

import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TopMenu from '../components/ShowTicket/TopMenu.vue';
import TicketsTable from '../components/ShowTicket/TicketsTable.vue';
import Modal from '../components/Modal.vue';

import { useTicketStore } from '../Stores/TicketStore.js';

import html2pdf from 'html2pdf.js';

const tickets = ref([]);
const technicians = ref([]);
const currentPage = ref(1);
const ticketsPerPage = ref(5);
const searchTerm = ref('');
const status = ref('All');
const creator = ref('All');
const assignee = ref('All');

let currentUser = ref(null);

const ticketStore = useTicketStore();

const tableRef = ref(null);

const printPDF = () => {
    let element = tableRef.value.$el;
    let opt = {
        margin: 1,
        filename: 'TicketsTable.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

onBeforeMount(async () => {
    try {
        tickets.value = (await TicketsService.getTickets()).data;
        currentUser.value = await UserService.getAuthedUser();
    } catch (error) {
        console.error("Erro ao procurar tickets:", error);
    }

    await getTechnicians();
});

const handleCancelModal = () => {
    ticketStore.handleCancelModal();
};

const handleConfirmModal = () => {
    ticketStore.handleConfirmModal();
};

const filteredTickets = computed(() => {
    let filtered = tickets.value.filter((ticket) => {
        const title = ticket.title ? ticket.title.toLowerCase() : '';
        const requester = ticket.createdby ? ticket.createdby.name.toLowerCase() : '';
        const assignee = ticket.assignedto ? ticket.assignedto.name.toLowerCase() : '';

        let matchesSearchTerm = title.includes(searchTerm.value.toLowerCase()) ||
            requester.includes(searchTerm.value.toLowerCase()) ||
            assignee.includes(searchTerm.value.toLowerCase());

        let matchesStatus = status.value === 'All' || ticket.status.status_name === status.value;

        let matchesCreator = creator.value !== 'Me' || (currentUser.value && currentUser.value.success && ticket.createdby.id === currentUser.value.user.id);

        let matchesAssignee = assignee.value !== 'Me' || (currentUser.value && currentUser.value.success && ticket.assignedto.id === currentUser.value.user.id);

        return matchesSearchTerm && matchesStatus && matchesCreator && matchesAssignee;
    });

    return filtered;
});

const displayedTickets = computed(() => {
    const startIndex = (currentPage.value - 1) * ticketsPerPage.value;
    const endIndex = startIndex + ticketsPerPage.value;
    return filteredTickets.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
    return Math.ceil(filteredTickets.value.length / ticketsPerPage.value);
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

            <TicketsTable :tickets="displayedTickets" :technicians="technicians" ref="tableRef" />
            <button @click="printPDF">Convert to PDF</button>
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