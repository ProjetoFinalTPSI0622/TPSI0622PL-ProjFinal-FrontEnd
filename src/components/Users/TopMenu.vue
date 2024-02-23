<script setup>
import { defineProps, defineEmits } from 'vue';
import SimpleButton from '@/components/SimpleButton.vue';
import SearchBox from '@/components/Users/UsersSearchBox.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    searchTerm: String

});
const emit = defineEmits(['update:searchTerm']);
</script>

<template>
    <span
        class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-4 border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div>Todos os Utilizadors</div>

        <RouterLink to="/users/create">
            <SimpleButton> + Adicionar Utilizador </SimpleButton>
        </RouterLink>
    </span>
    <div class="flex flex-row justify-end p-3 border-b-black border-b-opacity-30 border-b border-solid items-start">
        <div class="">
            <SearchBox :searchTerm="props.searchTerm" @update:searchTerm="emit('update:searchTerm', $event)" />
        </div>
    </div>
</template>