<script setup>
import SideSection from "@/components/SideSection.vue";
import SideSectionTop from "@/components/SideSectionTop.vue";
import { TicketsService } from "@/Services/TicketsService";
import { UserService } from "@/Services/UserService";
import { onBeforeMount, ref } from "vue";
import router from "@/router.js";
import TiptapEditor from '@/components/TicketDetails/TiptapEditor.vue';
import { LocationsService } from "../Services/LocationsService";

const attachedFiles = ref([]);

const handleUpdateAttachedFiles = (newFiles) => {
    attachedFiles.value = newFiles;
};

const category = ref({
    categories: [],
    selectedCategory: 1,
});
const priority = ref({
    priorities: [],
    selectedPriority: 1,
});
const location = ref({
    locations: [],
    selectedLocation: 1,
});

const isLoading = ref(true);
const user = ref({});

const ticketDescription = ref("");
const ticketTitle = ref("");

const isSubmitting = ref(false);

const submitHandler = async () => {

    const formData = new FormData();

    formData.append("title", ticketTitle.value);
    formData.append("description", ticketDescription.value);
    formData.append("priority", priority.value.selectedPriority);
    formData.append("category", category.value.selectedCategory);
    formData.append("location ", location.value.selectedLocation);

    attachedFiles.value.forEach((fileObj, index) => {
        formData.append(`files[${index}]`, fileObj.file);
    });

    try {
        isSubmitting.value = true;
        const createdTicket = await TicketsService.createTicket(formData);
        isSubmitting.value = false;
        await router.push({ name: "ticketDetails", params: { ticketId: createdTicket.data.id } })
    } catch (e) {
        console.log(e);
        isSubmitting.value = false;
    }
};


onBeforeMount(async () => {

    try {
        category.value.categories = (await TicketsService.getCategories()).data;
        priority.value.priorities = (await TicketsService.getPriorities()).data;
        location.value.locations = (await LocationsService.getLocations()).data;
        user.value = (await UserService.getAuthedUser()).data;
    } catch (e) {
        console.log(e);
    } finally {
        isLoading.value = false;
    }
});

</script>

<template>

   <div class="flex w-full overflow-auto">
        <SideSection class="hidden">
            <SideSectionTop>Novo Ticket</SideSectionTop>
            <div class="flex flex-col p-2 xl:p-5 gap-4">
                <div class="flex flex-col gap-3">
                    <label class="text-pink-600 text-l xl:text-lg justify-center">
                        Criado por:
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
                        class="cursor-pointer border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Escolha uma categoria</option>
                        <option v-for="category in category.categories" :key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-pink-600 text-l xl:text-lg justify-center">
                        Urgência
                    </label>
                    <select v-model="priority.selectedPriority" @change="testeChange"
                        class="cursor-pointer border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Escolha a urgência</option>
                        <option v-for="priority in priority.priorities" :key="priority.id" :value="priority.id">
                            {{ priority.name }}
                        </option>
                    </select>
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-pink-600 text-l xl:text-lg justify-center">
                        Localização
                    </label>
                    <select v-model="location.selectedLocation" @change="testeChange"
                        class="cursor-pointer border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Escolha a Localização</option>
                        <option v-for="location in location.locations" :key="location.id" :value="location.id">
                            {{ location.name }}
                        </option>
                    </select>
                </div>
            </div>
        </SideSection>

        <div class="flex flex-col w-full lg:w-[80%]">

            <span
                class="text-purple flex sm:text-2xl text-xl h-[9vh] whitespace-nowrap justify-between p-3 border-b-purple border-b-opacity-30 border-b border-solid items-start">
                <input type="text" placeholder="Titulo" v-model="ticketTitle"
                    class="bg-grey text-black text-opacity-60 text-xl w-full pt-2 pb-1.5 px-3 rounded-xl border border-solid border-black border-opacity-20" />
            </span>
            <span
                class="text-purple flex sm:text-2xl text-xl h-[50vh] whitespace-nowrap justify-between p-3 border-b-purple border-b-opacity-30 border-b border-solid items-start">
            </span>


            <div
                class="text-purple flex flex-col gap-4 sm:text-2xl text-xl h-[30vh] whitespace-nowrap justify-between p-3 items-start">

                <div class="flex justify-between text-xl gap-2 w-full">
                    <div class="flex">
                        <img src="../assets/corner-up-left.svg" />
                        <span class="flex px-2">Descrição do seu problema</span>
                    </div>
                    <button type="submit" @click.prevent="submitHandler" :disabled="isSubmitting"
                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg hoverBlue">
                        Criar Ticket
                    </button>

                </div>

                <form class="w-full border border-solid border-black border-opacity-20 rounded-lg bg-grey">
                    <div class="px-4 py-2 bg-grey rounded-t-lg">

                        <TiptapEditor v-model="ticketDescription" :attachedFiles="attachedFiles"
                            @update:attachedFiles="handleUpdateAttachedFiles" />

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