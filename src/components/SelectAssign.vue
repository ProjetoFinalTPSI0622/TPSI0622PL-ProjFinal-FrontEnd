<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const selectbox = ref(null);
let oldValue = 0;

defineProps({
    currentValue: String,
    newValues: Array
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
        class="border bg-white w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
        <option selected>
            {{ currentValue ? currentValue.name : 'Unassigned' }}
        </option>

        <option v-for="newValue in newValues" :key="newValue.id" :value="newValue.id">
            {{ newValue.name }}
        </option>
    </select>
</template>
