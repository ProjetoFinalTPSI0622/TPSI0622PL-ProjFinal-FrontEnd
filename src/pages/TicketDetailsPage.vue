<script setup>
import SideSection from "../components/SideSection.vue";
import SideSectionTop from "../components/SideSectionTop.vue";
import { TicketsService } from "../Services/TicketsService";
import { UserService } from "../Services/UserService.js";
import { ref, onBeforeMount, reactive } from 'vue';
import { useRoute } from 'vue-router';
import SimpleButton from '../components/SimpleButton.vue';
import DescriptionView from '../components/TicketDetails/DescriptionView.vue';
import CommentsView from '../components/TicketDetails/CommentsView.vue';
import chatImg from '../assets/chat.svg';
import descriptionImg from '../assets/descriptionWhite.svg';


const route = useRoute();

const ticket = ref({});

const technicians = ref([]);


onBeforeMount(async () => {
  await getTickets();
  await getTechnicians();

});

const viewState = reactive({
  showComments: false,
});

const getTechnicians = async () => {
  try {
    const response = await UserService.getTechnicians();
    if (response.success) {
      technicians.value = response.data;
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching technicians:', error);
  }
};

const getTickets = async () => {
  try {
    const response = await TicketsService.getTicket(route.params.ticketId);
    if (response.success) {
      ticket.value = response.ticket;
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};


</script>

<template>
  <div class="flex w-full">
    <SideSection>
      <SideSectionTop>Ticket Details</SideSectionTop>
      <div class="flex flex-col p-2 xl:p-5 gap-4">
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Requester
          </label>
          <div
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            <!--                     TODO: ADICIONAR FOTO DO USER AFTER-->
            {{ ticket.createdby ? ticket.createdby.name : 'N/A' }}
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Assigned to
          </label>
          <select
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            <option disabled selected>
              {{ ticket.assignedto ? ticket.createdby.name : 'Unassigned' }}
            </option>

            <option v-for="technician in technicians" :key="technician.id" :value="technician.id">
              {{ technician.name }}
            </option>

          </select>
        </div>

        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Categoria
          </label>
          <div
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            {{ ticket.category ? ticket.category.category_name : 'N/A' }}
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label class="text-pink-600 text-l xl:text-lg justify-center">
            Urgência
          </label>
          <div
            class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
            {{ ticket.priority ? ticket.priority.priority_name : 'N/A' }}
          </div>
        </div>
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
              {{ viewState.showComments ? 'Description' : 'Comments' }} <img
                :src="viewState.showComments ? descriptionImg : chatImg">
            </SimpleButton>
          </div>
        </span>
      </div>

      <span
        class="text-purple flex sm:text-2xl text-xl h-[50vh] justify-between pl-6 pr-12 py-4 border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div v-if="viewState.showComments">
          <CommentsView />
        </div>
        <div v-else>
          <DescriptionView :description="ticket.description" />
        </div>
      </span>


      <div
        class="text-purple flex flex-col gap-4 sm:text-2xl text-xl h-[30vh] whitespace-nowrap justify-between p-3 items-start">

        <div class="flex text-xl gap-2">
          <div class="flex border-r-2 border-solid border-black border-opacity-30 pr-2">
            <img src="../assets/corner-up-left.svg" />
            <select class="flex px-2">
              <option>Public reply</option>
              <option>Private reply</option>
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
              <textarea id="comment" rows="4"
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
              <button type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg hoverBlue">
                Post comment
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>