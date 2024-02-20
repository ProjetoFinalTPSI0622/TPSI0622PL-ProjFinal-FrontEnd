<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import SideSection from '../SideSection.vue';
import SideSectionTop from '../SideSectionTop.vue';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore';
import { useAuthedUserStore } from '@/Stores/UserStore';

const ticketFilterStore = useTicketFilterStore();
const authedUserStore = useAuthedUserStore();
let state = reactive({ selected: null });

const showAllTickets = () => {
    ticketFilterStore.handleFilterReset();
    state.selected = 'Todos os tickets';
    emitFilterChange();
};

const toggleAssignedToMe = () => {
    ticketFilterStore.handleFilterReset();
    ticketFilterStore.handleFilterChange('technician', authedUserStore.currentUser.name);
    state.selected = 'Assignados a mim';
    emitFilterChange();
};

const toggleMyTickets = () => {
    ticketFilterStore.handleFilterReset();
    ticketFilterStore.handleFilterChange('user', authedUserStore.currentUser.name);
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
                    <div class="text-purple text-l xl:text-lg whitespace-nowrap pr-2">
                        Assignados a mim
                    </div>
                </div>
                <div @click="toggleMyTickets" :class="{ 'bg-greyDark': state.selected === 'Os meus tickets' }"
                    class="hoverGreyDark rounded-t-lg justify-center py-3.5 px-2 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <div class="text-purple text-l xl:text-lg whitespace-nowrap pr-2">
                        Os meus tickets
                    </div>
                </div>
                <div class="justify-center flex flex-col pt-2">
                    <span @click="toggleStatus('Pendente')" :class="{ 'bg-greyDark': state.selected === 'Pendente' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Pendente
                        </div>
                    </span>
                    <span @click="toggleStatus('Em Progresso')"
                        :class="{ 'bg-greyDark': state.selected === 'Em Progresso' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Em Progresso
                        </div>
                    </span>
                    <span @click="toggleStatus('Completo')" :class="{ 'bg-greyDark': state.selected === 'Completo' }"
                        class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Completo
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </SideSection>
</template>