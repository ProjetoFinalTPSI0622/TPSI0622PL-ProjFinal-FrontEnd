<script setup>
import SideSection from "@/components/SideSection.vue";
import SideSectionTop from "@/components/SideSectionTop.vue";
import { TicketsService } from "@/Services/TicketsService";
import { UserService } from "@/Services/UserService";
import { onBeforeMount, ref, reactive } from "vue";
import router from "@/router.js";


const category = ref({
    categories: [],
    selectedCategory: 1,
});
const priority = ref({
    priorities: [],
    selectedPriority: 1,
});
const isLoading = ref(true);
const user = ref({});

const ticketDescription = ref("");
const ticketTitle = ref("");

const isSubmitting = ref(false);


const ticketData = ref({
    title: "",
    description: "",
    priority: 0,
    category: 0,
})

const submitHandler = async () => {

  ticketData.value.title = ticketTitle.value;
  ticketData.value.description = ticketDescription.value;
  ticketData.value.priority = priority.value.selectedPriority;
  ticketData.value.category = category.value.selectedCategory;
  try {
        isSubmitting.value = true;
        const createdTicket = await TicketsService.createTicket(ticketData.value);
        isSubmitting.value = false;
        await router.push({name: "ticketDetails", params: {ticketId: createdTicket.data.id}})
    } catch (e) {
      console.log(e);
        isSubmitting.value = false;
    }
};


onBeforeMount(async () => {

    try {
        category.value.categories = (await TicketsService.getCategories()).data;
        priority.value.priorities = (await TicketsService.getPriorities()).data;
        user.value = (await UserService.getAuthedUser()).data;
    } catch (e) {
        console.log(e);
    } finally {
        isLoading.value = false;
    }
});

</script>

<template>
    <div class="flex w-full">
        <SideSection>
            <SideSectionTop>New Ticket</SideSectionTop>
            <div class="flex flex-col p-2 xl:p-5 gap-4">
                <div class="flex flex-col gap-3">
                    <label class="text-pink-600 text-l xl:text-lg justify-center">
                        Requester
                    </label>
                    <div
                        class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <!--                     TODO: ADICIONAR FOTO DO USER AFTER-->
                        {{ user.name }}
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-pink-600 text-l xl:text-lg justify-center">
                        Categoria
                    </label>
                    <select v-model="category.selectedCategory" @change="testeChange"
                        class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Escolha uma categoria</option>
                        <option v-for="category in category.categories" :key="category.id" :value="category.id">
                            {{ category.category_name }}
                        </option>
                    </select>
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-pink-600 text-l xl:text-lg justify-center">
                        Urgência
                    </label>
                    <select v-model="priority.selectedPriority" @change="testeChange"
                        class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Escolha a urgência</option>
                        <option v-for="priority in priority.priorities" :key="priority.id" :value="priority.id">
                            {{ priority.priority_name }}
                        </option>
                    </select>
                </div>
            </div>
        </SideSection>

        <div class="flex flex-col w-full lg:w-[80%]">

            <span
                class="text-purple flex sm:text-2xl text-xl h-[9vh] whitespace-nowrap justify-between p-3 border-b-purple border-b-opacity-30 border-b border-solid items-start">
                <input type="text" placeholder="Title" v-model="ticketTitle"
                    class="bg-grey text-black text-opacity-60 text-xl w-full pt-2 pb-1.5 px-3 rounded-xl border border-solid border-black border-opacity-20" />
            </span>
            <span
                class="text-purple flex sm:text-2xl text-xl h-[50vh] whitespace-nowrap justify-between p-3 border-b-purple border-b-opacity-30 border-b border-solid items-start">
            </span>


            <div
                class="text-purple flex flex-col gap-4 sm:text-2xl text-xl h-[30vh] whitespace-nowrap justify-between p-3 items-start">

                <div class="flex gap-2">
                    <img src="../assets/corner-up-left.svg" />
                    <span>Description of your problem</span>
                </div>
                <form class="w-full">
                    <div class="w-full border border-solid border-black border-opacity-20 rounded-lg bg-grey">
                        <div class="px-4 py-2 bg-grey rounded-t-lg">
                            <textarea id="comment" rows="4" v-model="ticketDescription"
                                class="w-full px-0 text-base text-gray-900 bg-grey focus:outline-none focus-visible:outline-none"
                                placeholder="Write here your problem as detailed as possible..." required>

                            </textarea>
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
                            <button type="submit" @click.prevent="submitHandler" :disabled="isSubmitting"
                                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg hoverBlue">
                                Create Ticket
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