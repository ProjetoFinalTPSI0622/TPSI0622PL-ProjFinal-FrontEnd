<script setup>
import SideSection from "@/components/SideSection.vue";
import SideSectionTop from "@/components/SideSectionTop.vue";
import { TicketsService } from "@/Services/TicketsService";
import { UserService } from "@/Services/UserService.js";
import { onBeforeMount, reactive, ref, watch, onMounted } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import SimpleButton from '@/components/SimpleButton.vue';
import DescriptionView from '@/components/TicketDetails/DescriptionView.vue';
import CommentsView from '@/components/TicketDetails/CommentsView.vue';
import chatImg from '@/assets/chat.svg';
import descriptionImg from '@/assets/descriptionWhite.svg';
import Modal from "@/components/Modal.vue";
import { useTicketStore } from '@/Stores/TicketStore.js';
import SimpleSelect from '@/components/SimpleSelect.vue';
import CreateCommentForm from "@/components/TicketDetails/CreateCommentForm.vue";
import { CommentsService } from "@/Services/CommentsService.js";
import { useAuthedUserStore } from '@/Stores/UserStore.js';
import ToastStore from '@/Stores/ToastStore.js';
import LoadingSpinner from '@/components/Loading.vue';
import { LocationsService } from "@/Services/LocationsService.js";

const authedUserStore = useAuthedUserStore();
const isSideSectionVisible = ref(false);

//TICKET
const route = useRoute();
const ticket = ref({});
const isloading = ref(true);
const technicians = ref([]);
const ticketStore = useTicketStore();
const statuses = ref([]);
const priorities = ref([]);
const locations = ref([]);

//COMMENTS
const comments = ref([]);

onBeforeRouteUpdate((to, from, next) => {
  getTicket(to.params.ticketId)
    .then(() => next())
    .catch(error => {
      console.error('Error fetching ticket details:', error);
      next(false);
    });
});


onBeforeMount(async () => {
  await getTicket();
  await getTechnicians();
  await getStatuses();
  await getPriorities();
  await getLocations();
  isloading.value = false;
});

onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 1024px)');
  isSideSectionVisible.value = mediaQuery.matches;
  mediaQuery.addEventListener('change', (e) => {
    isSideSectionVisible.value = e.matches;
  });
});

const viewState = reactive({
  showComments: false,
});

const getLocations = async () => {
  try {
    const response = (await LocationsService.getLocations());
    if (response.success) {
      locations.value = response.data;
      console.log(locations.value);
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching priorities:', error);
  }
};

const getPriorities = async () => {
  try {
    const response = (await TicketsService.getPriorities());
    if (response.success) {
      priorities.value = response.data;
      console.log(priorities.value);
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching priorities:', error);
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

const getTicket = async () => {
  try {
    ticket.value = (await TicketsService.getTicket(route.params.ticketId)).data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};

const getStatuses = async () => {
  try {
    const response = (await TicketsService.getStatuses()).data;
    statuses.value = response.filter(status => status.name !== 'Completo');
  } catch (error) {
    console.error('Error fetching statuses:', error);
  }
};

const fetchComments = async () => {
  try {
    comments.value = (await CommentsService.getComments(ticket.value.id)).data.comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

watch(
  () => viewState.showComments,
  async () => {
    if (viewState.showComments) {
      console.log('fetching comments')
      await fetchComments();
    }
  }
)

const handleShowModalStatus = (technicianName, oldValue) => {
  ticketStore.handleShowModalStatus(technicianName, ticket.value.id, oldValue);
};

const handleShowModalTech = (technicianName, oldValue) => {
  ticketStore.handleShowModalTech(technicianName, ticket.value.id, oldValue);
};

const handleShowModalPriority = (priority, oldValue) => {
  ticketStore.handleShowModalPriority(priority, ticket.value.id, oldValue);
};

const handleCancelModal = () => {
  ticketStore.handleCancelModal();
};

const handleConfirmModal = () => {
  ticketStore.handleConfirmModal();
};

const closeTicket = async () => {
  await ticketStore.closeTicket(ticket.value.id);
};

const reopenTicket = async () => {
  await ticketStore.reopenTicket(ticket.value.id);
};

const toggleSideSection = () => {
  isSideSectionVisible.value = !isSideSectionVisible.value;
};

</script>

<template>
  <LoadingSpinner v-if="isloading" />

  <div v-if="!isloading" class="flex h-[84vh] sm:h-full w-full">

    <button class="fixed top-[50%] z-50 sm:hidden bg-purple text-white px-1"
      :class="isSideSectionVisible ? 'right-0 rounded-l-lg' : 'left-0 rounded-r-lg'" @click="toggleSideSection">
      {{ isSideSectionVisible ? '<<' : '>>' }} </button>

        <SideSection :ticket="ticket" v-show="isSideSectionVisible" class="fixed inset-0 z-40 lg:static lg:z-auto">
          <SideSectionTop>Detalhes do Ticket</SideSectionTop>
          <div class="flex flex-col py-2 px-16 lg:p-5 gap-4 overflow-auto no-scrollbar">
            <div class="flex flex-col gap-3">
              <label class="text-pink-600 text-l xl:text-lg justify-center">
                Criado por:
              </label>
              <div
                class="border bg-white flex justify-between lg:w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                <!--                     TODO: ADICIONAR FOTO DO USER AFTER-->
                {{ ticket.createdby ? ticket.createdby.name : 'N/A' }}

              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-pink-600 text-l xl:text-lg justify-center">
                Técnico
              </label>
              <div class="flex justify-between lg:w-full">
                <SimpleSelect :currentValue="ticket.assignedto" :newValues="technicians"
                  @show-modal="handleShowModalTech" />
              </div>
            </div>

            <div class="flex flex-col gap-3">
              <label class="text-pink-600 text-l xl:text-lg justify-center">
                Categoria
              </label>
              <div
                class="border bg-white flex justify-between lg:w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                {{ ticket.category ? ticket.category.name : 'N/A' }}
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-pink-600 text-l xl:text-lg justify-center">
                Urgência
              </label>
              <div class="flex justify-between lg:w-full">
                <SimpleSelect :currentValue="ticket.priority" :newValues="priorities"
                  @show-modal="handleShowModalPriority" />
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-pink-600 text-l xl:text-lg justify-center">
                Estado
              </label>
              <div class="flex justify-between lg:w-full">
                <SimpleSelect :currentValue="ticket.status" :newValues="statuses" @show-modal="handleShowModalStatus" />
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-pink-600 text-l xl:text-lg justify-center">
                Localização
              </label>
              <div class="flex justify-between lg:w-full">
                <SimpleSelect :currentValue="locations.status" :newValues="locations" />
              </div>
            </div>
            <SimpleButton @click="closeTicket"
              v-if="authedUserStore.userRole === 'admin' && ticket.status.name !== 'Completo'" class="w-full py-1">
              <img class="self-center" src="../assets/remove.svg" />
              Fechar ticket
            </SimpleButton>
            <SimpleButton @click="reopenTicket"
              v-if="authedUserStore.userRole === 'admin' && ticket.status.name === 'Completo'" class="w-full py-1">
              <img class="self-center" src="../assets/redo.svg" />
              Reabrir ticket
            </SimpleButton>
          </div>
        </SideSection>

        <div class="flex flex-col w-full lg:w-[80%]">

          <div class="justify-center flex flex-col py-8 px-5 h-[12vh] sm:h-[9vh] border-b-black border-b border-solid">
            <span class="justify-between flex flex-col sm:flex-row gap-2 xl:gap-5">
              <div class="text-purple text-2xl">
                {{ ticket.title ? ticket.title : 'N/A' }}
              </div>
              <div class="flex justify-end">
                <SimpleButton @click="viewState.showComments = !viewState.showComments">
                  {{ viewState.showComments ? 'Descrição' : 'Comentários' }}
                  <img :src="viewState.showComments ? descriptionImg : chatImg">
                </SimpleButton>
              </div>
            </span>
          </div>

          <div
            class="text-purple sm:text-2xl text-xl overflow-auto justify-between sm:pl-4 sm:pr-12 px-14 py-4 items-start"
            :class="{ 'h-[80vh]': !viewState.showComments, 'h-[53vh] border-b-purple border-b-opacity-30 border-b border-solid': viewState.showComments }">
            <div v-if="viewState.showComments" v-for="comment in comments" :key="comment.id">
              <CommentsView :comment="comment" />
            </div>
            <div v-else>
              <DescriptionView :myTicket="ticket" />
            </div>
          </div>

          <div v-if="viewState.showComments">
            <CreateCommentForm :ticket="ticket" @refreshComments="fetchComments" />
          </div>

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

<style scoped>
textarea {
  resize: none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>