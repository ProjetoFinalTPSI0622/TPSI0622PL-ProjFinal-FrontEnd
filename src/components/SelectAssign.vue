<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const selectbox = ref(null);
let oldValue = 0;

defineProps({
    assignedto: String,
    technicians: Array
});

const emit = defineEmits(['show-modal']);

const showTicketModal = (technicianName) => {
    emit('show-modal', technicianName, selectbox, oldValue);
};

const handleMousedown = () => {
    oldValue = selectbox.value.selectedIndex;
};
</script>
<template>
    <select ref="selectbox" @change.prevent="showTicketModal($event.target.value)" @click.stop @mousedown="handleMousedown"
        class="border bg-white w-full py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
        <option selected>
            {{ assignedto ? assignedto.name : 'Unassigned' }}
        </option>

        <option v-for="technician in technicians" :key="technician.name" :value="technician.name">
            {{ technician.name }}
        </option>
    </select>
</template>
