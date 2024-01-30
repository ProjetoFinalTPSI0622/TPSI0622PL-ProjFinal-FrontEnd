<script setup>
import { defineProps, defineEmits } from 'vue';
import SimpleButton from '../SimpleButton.vue';
import SearchBox from '../SearchBox.vue';
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';

const props = defineProps({
    searchTerm: String
});
const emit = defineEmits(['update:searchTerm']);

const state = reactive({
    isOpen: false,
    selectedOptions: [],
    dropdownItems: [
        { id: 1, name: 'Estado', href: '#' },
        { id: 2, name: 'Categoria', href: '#' },
    ],
});

const toggleDropdown = () => {
    state.isOpen = !state.isOpen;
};

const selectOption = (option) => {
    if (!state.selectedOptions.find(o => o.id === option.id)) {
        state.selectedOptions.push({
            ...option, isOpen: false, selectedNestedOptions: [], dropdownItems: [
                { id: 1, name: 'Nested 1', href: '#' },
                { id: 2, name: 'Nested 2', href: '#' },
            ]
        });
    }
    state.isOpen = false;
};

const selectNestedOption = (option) => {
    if (!option.selectedNestedOptions.find(o => o.id === option.selectedNestedOption.id)) {
        option.selectedNestedOptions.push(option.selectedNestedOption);
    }
    option.selectedNestedOption = null;
    option.isOpen = false;
};

const removeNestedOption = (option, nestedOption) => {
    option.selectedNestedOptions = option.selectedNestedOptions.filter(o => o.id !== nestedOption.id);
};

</script>

<template>
    <span
        class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-4 h-[9vh] border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div>Todos os Tickets</div>
        <router-link to="/tickets/create">
            <SimpleButton> + Criar Ticket </SimpleButton>
        </router-link>
    </span>

    <div class="flex flex-row justify-between p-3 border-b-black border-b-opacity-30 border-b border-solid items-start">
        <div class="flex items-center gap-2">
            <div class="relative">
                <button @click="toggleDropdown"
                    class="justify-center bg-purple flex gap-2.5 px-3.5 sm:px-6 py-[5.5px] rounded-xl">
                    <img loading="lazy" src="../../assets/plus.svg" class="self-center">
                    <div class="text-white sm:text-lg">Filtros</div>
                </button>

                <div v-if="state.isOpen"
                    class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a v-for="item in state.dropdownItems" :key="item.id" :href="item.href"
                            @click.prevent="selectOption(item)"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem">{{ item.name }}</a>
                    </div>
                </div>
            </div>

            <div v-for="option in state.selectedOptions" :key="option.id"
                class="relative bg-purple text-white px-2 py-1 rounded-xl">
                <button @click="option.isOpen = !option.isOpen">
                    <div class="flex gap-1">
                        <img loading="lazy" src="../../assets/remove.svg" class="self-center hoverRemove rounded-md"
                            @click="state.selectedOptions = state.selectedOptions.filter(o => o.id !== option.id)">
                        <p>{{ option.name }}</p>
                        <img loading="lazy" src="../../assets/Chevron Down.svg">
                    </div>
                </button>

                <!-- Nested dropdown -->
                <div v-if="option.isOpen"
                    class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-2">
                    <select v-model="option.selectedNestedOption"
                        class="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2">
                        <option v-for="item in option.dropdownItems" :key="item.id" :value="item">
                            {{ item.name }}
                        </option>
                    </select>
                    <button class="w-full text-center py-2 bg-purple text-white"
                        @click="selectNestedOption(option)">Done</button>
                </div>

                <!-- Selected nested options -->
                <div @click="removeNestedOption(option, nestedOption)" v-for="nestedOption in option.selectedNestedOptions" :key="nestedOption.id"
                    class="inline-block bg-white rounded-lg px-3 py-1 text-sm font-semibold text-purpleLight ml-1 hoverRemove">
                    {{ nestedOption.name }}
                </div>
            </div>
        </div>

        <SearchBox :searchTerm="props.searchTerm" @update:searchTerm="emit('update:searchTerm', $event)" />
    </div>
</template>