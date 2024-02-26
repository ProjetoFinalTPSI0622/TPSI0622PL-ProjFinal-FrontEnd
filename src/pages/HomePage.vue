<template>
  <div class="w-full p-5 overflow-auto">
    <div class="w-full flex flex-col items-center justify-start min-h-screen bg-grey mb-20 md:mb-0">
      <TextAnimation />
      <div class="items-center my-3">
        <h1 v-if="!currentUser.isLoading" class="text-4xl lg:text-3xl font-bold text-purple">
          Bem-Vindo, <span class="text-blue">{{ currentUser.user.name }}!</span>
        </h1>
      </div>

      <div v-if="authedUserStore.userRole === 'admin' || authedUserStore.userRole === 'technician'"
        class="pl-3">
        <p class="underline">ULTIMOS TICKETS</p>
        <TicketsTable :tickets="displayedTickets" :technicians="technicians" />
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
  </div>
</template>
  
<script setup>
import { ref, onBeforeMount, computed, watch } from 'vue';
import { UserService } from "@/Services/UserService.js";
import TicketsTable from "@/components/ShowTicket/TicketsTable.vue";
import { useTicketStore } from '@/Stores/TicketStore.js';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore.js';
import Modal from '@/components/Modal.vue';
import { useAuthedUserStore } from '@/Stores/UserStore.js';
import TextAnimation from '../layout/TextAnimation.vue';

const authedUserStore = useAuthedUserStore();

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
  