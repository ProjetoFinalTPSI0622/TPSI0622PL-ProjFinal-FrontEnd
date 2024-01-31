<script setup>
import { defineProps, defineEmits, ref } from 'vue';

let isAssigned = ref(false);
const selectbox = ref(null);

defineProps({
    ticket: Object,
    technicians: Array
});


const emit = defineEmits(['show-modal', 'selectbox']);


const showTicketModal = (technicianName) => {
    emit('show-modal', technicianName, selectbox, oldValue);

};

let oldValue = 0;
const handleMousedown = () => {
    oldValue = selectbox.value.selectedIndex;
};





</script>

<template>
    <tr class="border-b-black border-b-opacity-30 border-b border-solid hoverGrey">
        <td class="hidden sm:flex pl-5">
            <div class="flex gap-2.5 min-w-fit">
                <img loading="lazy" src="../../assets/MoNengue.jpg"
                    class="aspect-square object-cover object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
                <div class="flex flex-col h-full justify-center">
                    <div class="hidden sm:block text-black text-opacity-80 text-sm sm:text-lg">
                        {{ ticket.createdby.name }}
                    </div>
                    <div class="hidden lg:block text-black text-opacity-50 text-sm sm:text-lg whitespace-nowrap">
                        {{ ticket.createdby.email }}
                    </div>
                </div>
            </div>
        </td>
        <td class="text-black text-opacity-80 text-sm sm:text-lg">
            <div class="flex justify-center sm:justify-start">
                {{ ticket.title }}
            </div>
        </td>
        <td class="text-black text-opacity-80 text-sm sm:text-lg">
            <div class="flex justify-center sm:justify-start">
                <select ref="selectbox" @change.prevent="showTicketModal($event.target.value)" @click.stop @mousedown="handleMousedown"
                    class="border bg-white flex justify-between w-40 py-1 lg:py-2 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                    <option selected>
                        Unassigned
                    </option>


                    <option v-for="technician in technicians" :key="technician.name" :value="technician.name">
                        {{ technician.name }}
                    </option>


                </select>
            </div>
        </td>
        <td class="text-white text-xs sm:text-lg">
            <div class="flex justify-center sm:block">
                <div class="bg-red-600 py-2 px-4 rounded-3xl w-fit">
                    {{ ticket.status.status_name }}
                </div>
            </div>
        </td>
    </tr>
</template>

<style scoped>
td {
    padding-top: 2vh;
    padding-bottom: 2vh;
}

td:first-child {
    padding-left: 1vw;
}
</style>