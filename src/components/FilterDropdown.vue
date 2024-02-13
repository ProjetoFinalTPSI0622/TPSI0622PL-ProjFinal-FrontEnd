<script setup>

import { reactive, watch } from 'vue';
import { useTicketFilterStore } from '@/Stores/TicketFilterStore.js';
import { UserService } from '@/Services/UserService';
import { StatesService } from '@/Services/StatesService';
import { TicketsService } from '@/Services/TicketsService';

const ticketFilterStore = useTicketFilterStore();

const state = reactive({
    isOpen: false,
    selectedOptions: [],
    dropdownItems: [
        { id: 'user', name: 'Criado por' },
        { id: 'technician', name: 'Técnico' },
        { id: 'category', name: 'Categoria' },
        { id: 'priority', name: 'Prioridade' },
        { id: 'status', name: 'Estado' },
    ],
});

const serviceMethods = {
    user: UserService.getUsers,
    technician: UserService.getTechnicians,
    category: TicketsService.getCategories,
    priority: TicketsService.getPriorities,
    status: StatesService.getStates,
};

const toggleDropdown = () => {
    state.isOpen = !state.isOpen;
};

const selectOption = async (option) => {
    if (!state.selectedOptions.find(o => o.id === option.id)) {
        const serviceMethod = serviceMethods[option.id];
        if (serviceMethod) {
            const dropdownItems = (await serviceMethod()).data.map(item => ({ id: item.id, name: item.name }));

            state.selectedOptions.push({
                ...option, isOpen: false, selectedNestedOptions: [], dropdownItems
            });
        }
    }
    state.isOpen = false;
};

const selectNestedOption = (option) => {
    if (!option.selectedNestedOptions.find(o => o.id === option.selectedNestedOption.id)) {
        option.selectedNestedOptions.push(option.selectedNestedOption);
    }
    option.selectedNestedOption = null;
    option.isOpen = false;

    ticketFilterStore.handleFilterChange(option.id, option.selectedNestedOptions.map(o => o.name));
};

const removeNestedOption = (option, nestedOption) => {
    option.selectedNestedOptions = option.selectedNestedOptions.filter(o => o.id !== nestedOption.id);

    if (option.selectedNestedOptions.length === 0) {
        ticketFilterStore.handleFilterChange(option.id, 'all');
    } else {
        ticketFilterStore.handleFilterChange(option.id, option.selectedNestedOptions.map(o => o.id));
    }
};

const resetSelectedOptions = () => {
    state.selectedOptions.forEach(option => {
        option.selectedNestedOptions = [];
    });
    state.selectedOptions = [];
};

watch(() => ticketFilterStore.sideFilterChange, resetSelectedOptions);

</script>

<template>
    <div class="relative">
        <button @click="toggleDropdown" class="justify-center bg-purple flex gap-2.5 px-3 py-[5.5px] rounded-xl">
            <img loading="lazy" src="@/assets/plus.svg" class="self-center">
            <div class="text-white sm:text-lg">Filtros</div>
        </button>

        <div v-if="state.isOpen"
            class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a v-for="item in state.dropdownItems" :key="item.id" :href="item.href" @click.prevent="selectOption(item)"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    role="menuitem">{{
                        item.name }}</a>
            </div>
        </div>
    </div>

    <div v-for="option in state.selectedOptions" :key="option.id"
        class="relative bg-purple text-white px-2 py-1 rounded-xl">
        <button @click="option.isOpen = !option.isOpen">
            <div class="flex gap-1">
                <img loading="lazy" src="@/assets/remove.svg" class="self-center hoverRed rounded-md"
                    @click="state.selectedOptions = state.selectedOptions.filter(o => o.id !== option.id)">
                <p>{{ option.name }}</p>
                <img loading="lazy" src="@/assets/Chevron Down.svg">
            </div>
        </button>

        <!-- Nested dropdown -->
        <div v-if="option.isOpen"
            class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
            <select v-model="option.selectedNestedOption"
                class="cursor-pointer block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2">
                <option v-for="item in option.dropdownItems" :key="item.id" :value="item">
                    {{ item.name }}
                </option>
            </select>
            <button class="w-full text-center py-2 bg-purple text-white" @click="selectNestedOption(option)">Done</button>
        </div>

        <!-- Selected nested options -->
        <div @click="removeNestedOption(option, nestedOption)" v-for="nestedOption in option.selectedNestedOptions"
            :key="nestedOption.id"
            class="inline-block bg-white rounded-lg px-3 py-1 text-sm font-semibold text-purpleLight ml-1 hoverRed">
            {{ nestedOption.name }}
        </div>
    </div>
</template>