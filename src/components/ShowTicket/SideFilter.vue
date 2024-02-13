<script setup>
import { ref, onMounted } from 'vue';
import SideSection from '../SideSection.vue';
import SideSectionTop from '../SideSectionTop.vue';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore';
import { UserService } from '@/Services/UserService';

const ticketFilterStore = useTicketFilterStore();
let authedUser = ref(null);

onMounted(async () => {
    authedUser.value = await UserService.getAuthedUser();
});

const showAllTickets = () => {
    ticketFilterStore.handleFilterReset();
};

const toggleAssignedToMe = () => {
    ticketFilterStore.handleFilterChange('technician', authedUser.value.data.name);
};

const toggleMyTickets = () => {
    ticketFilterStore.handleFilterChange('user', authedUser.value.data.name);
};

const toggleStatus = (status) => {
    ticketFilterStore.handleFilterChange('status', status);
};
</script>

<template>
    <SideSection>
        <SideSectionTop>Tickets</SideSectionTop>

        <div class="flex flex-col py-2 gap-4">
            <div class=" flex flex-col px-4 gap-2 xl:gap-4">
                <span @click="showAllTickets"
                    class="hoverGreyDark rounded-t-lg text-pink-600 text-l xl:text-lg justify-center py-3.5 px-2 border-b-purple border-b-opacity-30 border-b border-solid">
                    Todos os tickets
                </span>
                <div @click="toggleAssignedToMe"
                    class="hoverGreyDark rounded-t-lg justify-center py-3.5 px-2 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between flex">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap pr-2">
                            Assignados a mim
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div @click="toggleMyTickets"
                    class="hoverGreyDark rounded-t-lg justify-center py-3.5 px-2 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between flex">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap pr-2">
                            Os meus tickets
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div class="justify-center flex flex-col pt-2">
                    <span @click="toggleStatus('Pendente')" class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Pendente
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Unassigned')" class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg">
                            Unassigned</div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Assigned')" class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Assigned
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('In Progress')" class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            In Progress
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Completed')" class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Completed
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Solved')" class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Solved
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
            </div>
        </div>
    </SideSection>
</template>