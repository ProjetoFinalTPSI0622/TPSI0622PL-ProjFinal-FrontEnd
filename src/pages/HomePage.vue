<template>
  <div class="w-full flex flex-col items-center justify-start min-h-screen bg-gray-100">
    <div id="animated-text">
  <span class="letter">C</span>
  <span class="letter">e</span>
  <span class="letter">s</span>
  <span class="letter">a</span>
  <span class="letter">e</span>
  <span class="letter">D</span>
  <span class="letter">e</span>
  <span class="letter">s</span>
  <span class="letter">k</span>
</div>
    <h1 v-if="!currentUser.isLoading" class="text-4xl lg:text-6xl font-bold mt-8">
      
      Bem-Vindo, <span style="color: #8a2be2;">{{ currentUser.user.name }}!</span>
    </h1>
    <div class="p-50">
      ULTIMOS TICKETS

      <TicketsTable :tickets="displayedTickets" :technicians="technicians"/>
    </div>

    <Modal :show="ticketStore.showModal" @Cancel="handleCancelModal" @Confirm="handleConfirmModal">
                    <template #title>
                        Assign Technician
                    </template>
                    <template #content>
                        You are about to assign {{ ticketStore.selectedTechnician }} to this ticket, are you sure?
                    </template>
                </Modal>

  </div>
</template>
  
<script setup>
import { ref, onBeforeMount,computed, watch } from 'vue';
import { UserService } from "@/Services/UserService.js";
import TicketsTable from "@/components/ShowTicket/TicketsTable.vue";
import { useTicketStore } from '@/Stores/TicketStore.js';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore.js';
import Modal from '@/components/Modal.vue';



const currentUser = ref({
  user: null,
  isLoading: true,
});

const tickets = ref([]);
const technicians = ref([]);
const currentPage = ref(1);
const ticketsPerPage = ref(5);
const searchTerm = ref('');


const ticketStore = useTicketStore();
const TicketFilter = useTicketFilterStore();


const fetchUser = async () => {
    currentUser.value.user = (await UserService.getAuthedUser()).data;
    currentUser.value.isLoading = false;
    console.log(currentUser.value.name);
};

onBeforeMount(async () => {
    await fetchUser();
    await fetchTickets();
    await getTechnicians();
});

const handleCancelModal = () => {
    ticketStore.handleCancelModal();
};

const handleConfirmModal = () => {
    ticketStore.handleConfirmModal();
};

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

</script>
  
  <style>
 #animated-text {
  font-size: 36px;
}

.letter {
  font: 70px 'Lucida Console', sans-serif;
  color: rgb(248, 111, 93);
  opacity: 0;
  animation: fadeIn 8s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

  </style>
  