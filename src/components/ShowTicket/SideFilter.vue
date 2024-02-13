<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import SideSection from '../SideSection.vue';
import SideSectionTop from '../SideSectionTop.vue';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore';
import { UserService } from '@/Services/UserService';

const ticketFilterStore = useTicketFilterStore();
let authedUser = ref(null);
let state = reactive({ selected: null });

onMounted(async () => {
    authedUser.value = await UserService.getAuthedUser();
});

const showAllTickets = () => {
    ticketFilterStore.handleFilterReset();
    state.selected = 'Todos os tickets';
    emitFilterChange();
};

const toggleAssignedToMe = () => {
    ticketFilterStore.handleFilterChange('technician', authedUser.value.data.name);
    state.selected = 'Assignados a mim';
    emitFilterChange();
};

const toggleMyTickets = () => {
    ticketFilterStore.handleFilterChange('user', authedUser.value.data.name);
    state.selected = 'Os meus tickets';
    emitFilterChange();
};

const toggleStatus = (status) => {
    ticketFilterStore.handleFilterReset(); 
    ticketFilterStore.handleFilterChange('status', status);
    state.selected = status;
    emitFilterChange();
};

const emitFilterChange = () => {
    ticketFilterStore.handleSideFilterChange();
};

watch(() => ticketFilterStore.filteredTickets, () => {
    state.selected = null;
});
</script>

<template>
    <SideSection>
        <SideSectionTop>Tickets</SideSectionTop>

        <div class="flex flex-col py-2 gap-4">
            <div class=" flex flex-col px-4 gap-2 xl:gap-4">
                <span @click="showAllTickets" :class="{ 'bg-greyDark': state.selected === 'Todos os tickets' }"
                    class="hoverGreyDark rounded-t-lg text-pink-600 text-l xl:text-lg justify-center py-3.5 px-2 border-b-purple border-b-opacity-30 border-b border-solid">
                    Todos os tickets
                </span>
                <div @click="toggleAssignedToMe" :class="{ 'bg-greyDark': state.selected === 'Assignados a mim' }"
                    class="hoverGreyDark rounded-t-lg justify-center py-3.5 px-2 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between flex">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap pr-2">
                            Assignados a mim
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div @click="toggleMyTickets" :class="{ 'bg-greyDark': state.selected === 'Os meus tickets' }"
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
                    <span @click="toggleStatus('Pendente')" :class="{ 'bg-greyDark': state.selected === 'Pendente' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Pendente
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Unassigned')"
                        :class="{ 'bg-greyDark': state.selected === 'Unassigned' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg">
                            Unassigned</div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Assigned')" :class="{ 'bg-greyDark': state.selected === 'Assigned' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Assigned
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('In Progress')"
                        :class="{ 'bg-greyDark': state.selected === 'In Progress' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            In Progress
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Completed')"
                        :class="{ 'bg-greyDark': state.selected === 'Completed' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Completed
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span @click="toggleStatus('Solved')" :class="{ 'bg-greyDark': state.selected === 'Solved' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
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