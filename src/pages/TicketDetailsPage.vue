<script setup>
import SideSection from "../components/SideSection.vue";
import SideSectionTop from "../components/SideSectionTop.vue";
import { TicketsService } from "../Services/TicketsService";
import { UserService } from "../Services/UserService.js";
import {onBeforeMount, reactive, ref, watch, nextTick} from 'vue';
import { useRoute } from 'vue-router';
import SimpleButton from '../components/SimpleButton.vue';
import DescriptionView from '../components/TicketDetails/DescriptionView.vue';
import CommentsView from '../components/TicketDetails/CommentsView.vue';
import chatImg from '../assets/chat.svg';
import descriptionImg from '../assets/descriptionWhite.svg';
import Modal from "../components/Modal.vue";
import { useTicketStore } from '../Stores/TicketStore.js';
import SelectAssign from '../components/SelectAssign.vue';

import {CommentsService} from "../Services/CommentsService.js";

//TICKET
const route = useRoute();
const ticket = ref({});
const technicians = ref([]);
const ticketStore = useTicketStore();

//COMMENTS
const commentBody = ref('');
const commentTypes = ref(null);
const selectedCommentType = ref(1);
const comments = ref([]);



onBeforeMount(async () => {
  await getTicket();
  await getTechnicians();
  await getCommentTypes();
});

const viewState = reactive({
  showComments: false,
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

const getTicket = async () => {
  try {
    ticket.value = (await TicketsService.getTicket(route.params.ticketId)).data;
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};

const getCommentTypes = async () => {
  try {
    commentTypes.value = (await CommentsService.getCommentTypes()).data;
  } catch (error) {
    //TODO: DAR DISPLAY DA ERROR MESSAGE NUM TOAST OR SMT
    console.error('Error fetching comment types:', error);
  }
};

const postComment = async () => {

  const commentData = {
    comment_body: commentBody.value,
    comment_type: selectedCommentType.value,
    ticket_id: ticket.value.id
  }
  try {
    const response = (await CommentsService.createComment(commentData));
  } catch (error) {
    console.error('Error posting comment:', error);
  }
  await nextTick(async () => {
    await fetchComments();
  });
};

const updateSelectedComment = (e) => {
  selectedCommentType.value = e.target.value;
};


const fetchComments = async () => {
  try {
    comments.value = (await CommentsService.getComments(ticket.value.id)).data.comments;
    console.log(comments.value)
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

watch(
    ()=> viewState.showComments,
    async() => {
      if (viewState.showComments) {
        console.log('fetching comments')
        await fetchComments();
      }
    }
)

const handleShowModal = (technicianName, selectbox, oldValue) => {
  ticketStore.handleShowModal(technicianName, selectbox, oldValue);
};

const handleCancelModal = () => {
  ticketStore.handleCancelModal();
};

const handleConfirmModal = () => {
  ticketStore.handleConfirmModal();
};

</script>

<template>
  <div class="flex w-full">
    <SideSection :ticket="ticket">
      <SideSectionTop>Ticket Details</SideSectionTop>
      <div class="flex flex-col p-2 xl:p-5 gap-4">
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Requester
          </label>
          <div
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            <!--                     TODO: ADICIONAR FOTO DO USER AFTER-->
            {{ ticket.createdby ? ticket.createdby.name : 'N/A' }}

          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Assigned to
          </label>
          <div class="flex justify-between w-40 lg:w-full">
            <SelectAssign :assignedto="ticket.assignedto" :technicians="technicians" @show-modal="handleShowModal" />
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Categoria
          </label>
          <div
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            {{ ticket.category ? ticket.category.category_name : 'N/A' }}
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Urgência
          </label>
          <div
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            {{ ticket.priority ? ticket.priority.priority_name : 'N/A' }}
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Estado
          </label>
          <select
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            <option disabled selected>
              {{ ticket.status ? ticket.status.status_name : 'N/A' }}
            </option>
          </select>
        </div>
        <SimpleButton class="w-full py-1 mt-4">
          <img class="self-center" src="../assets/remove.svg" />
          Close ticket
        </SimpleButton>
      </div>
    </SideSection>

    <div class="flex flex-col w-full lg:w-[80%]">

      <div class="justify-center flex flex-col px-5 h-[12vh] sm:h-[9vh] border-b-black border-b border-solid">
        <span class="justify-between flex flex-col xl:flex-row gap-2 xl:gap-5">
          <div class="text-purple text-2xl">
            {{ ticket.title ? ticket.title : 'N/A' }}
          </div>
          <div class="flex justify-end">
            <SimpleButton @click="viewState.showComments = !viewState.showComments">
              {{ viewState.showComments ? 'Description' : 'Comments' }}
              <img :src="viewState.showComments ? descriptionImg : chatImg">
            </SimpleButton>
          </div>
        </span>
      </div>

      <div
        class="text-purple flex sm:text-2xl text-xl h-[50vh] justify-between pl-6 pr-12 py-4 border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div v-if="viewState.showComments" v-for="comment in comments" :key="comment.id">
<!--          TODO: DANIEL POE ISTO COM FLEX :)-->
          <CommentsView :comment="comment"/>
        </div>
        <div v-else>
          <DescriptionView :description="ticket.description" />
        </div>
      </div>


      <div
        class="text-purple flex flex-col gap-4 sm:text-2xl text-xl h-[30vh] whitespace-nowrap justify-between p-3 items-start">

        <div class="flex text-xl gap-2">
          <div class="flex border-r-2 border-solid border-black border-opacity-30 pr-2">
            <img src="../assets/corner-up-left.svg" />
            <select class="flex px-2" v-model="selectedCommentType" @change="updateSelectedComment">
              <option v-for="commentType in commentTypes" :key="commentType.id" :value="commentType.id">
                {{ commentType.name }}
              </option>
            </select>
          </div>

          <div class="flex gap-4">
            <p>To</p>
            <div class="flex gap-1">
              <img loading="lazy" src="../assets/MoNengue.jpg"
                class="aspect-square object-cover object-center w-8 h-8 rounded-[50%]" />
              <p>MoNengue</p>
            </div>
          </div>

        </div>

        <form class="w-full">
          <div class="w-full border border-solid border-black border-opacity-20 rounded-lg bg-grey">
            <div class="px-4 py-2 bg-grey rounded-t-lg">
              <label for="comment" class="sr-only">Your comment</label>
              <textarea id="comment" rows="4" v-model="commentBody" @input="testeInput"
                class="w-full px-0 text-base text-gray-900 bg-grey focus:outline-none focus-visible:outline-none"
                placeholder="Write here your comment..." required></textarea>
            </div>
            <div class="flex items-center justify-between px-3 py-2 border-t">
              <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                <button type="button"
                  class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                  <img src="../assets/text.svg" />
                </button>
                <button type="button"
                  class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                  <img src="../assets/emoji.svg" />
                </button>
                <button type="button"
                  class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                  <img src="../assets/attach.svg" />
                </button>
              </div>
              <button type="submit" @click.prevent="postComment"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg hoverBlue">
                Post comment
              </button>
            </div>
          </div>
        </form>
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
</style>