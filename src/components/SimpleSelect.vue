<script setup>
import { defineProps, defineEmits, ref, onBeforeMount } from 'vue';
import { useAuthedUserStore } from '@/Stores/UserStore.js';

const authedUserStore = useAuthedUserStore();
const selectbox = ref(null);
let oldValue = 0;

defineProps({
    currentValue: Object,
    newValues: Array
});


onBeforeMount(async () => {
    await authedUserStore.fetchAuthedUser();
});

const emit = defineEmits(['show-modal']);

const showTicketModal = (selectedID) => {
    emit('show-modal', selectedID, oldValue);
};

const handleMousedown = () => {
    oldValue = selectbox.value.selectedIndex;
};


</script>

<template>
    <select ref="selectbox" @change.prevent="showTicketModal($event.target.value)" @click.stop @mousedown="handleMousedown"
        v-bind:style="{ appearance: authedUserStore.userRole !== 'admin' ? 'none' : 'auto' }"
        class="border bg-white w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20"
        :disabled="authedUserStore.userRole !== 'admin'">
        <option selected>
            {{ currentValue ? currentValue.name : 'Sem Técnico' }}
        </option>

        <template v-for="newValue in newValues">
            <option :key="newValue.id" :value="newValue.id"
                v-if="newValue && (!currentValue || newValue.name !== currentValue.name)">
                {{ newValue.name }}
            </option>
        </template>
    </select>
</template>