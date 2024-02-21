<script setup>
import { defineProps, onBeforeMount, ref } from 'vue';
import SimpleSelect from '../SimpleSelect.vue';
import { useTicketStore } from '../../Stores/TicketStore.js';

const props = defineProps({
    ticket: Object,
    technicians: Array
});

const ticketStore = useTicketStore();

const showTicketModal = (technicianID, oldValue) => {
    const ticketID = props.ticket.id;
    ticketStore.handleShowModalTech(technicianID, ticketID, oldValue);
};

</script>

<template>
    <tr class="border-b-black border-b-opacity-30 border-b border-solid hoverGrey flex justify-between pl-3 h-fit">
        <td class="hidden sm:flex w-1/4 sm:w-1/5">
            <div class="flex gap-2.5 min-w-fit">
                <img loading="lazy" src="../../assets/MoNengue.jpg"
                    class="aspect-square object-cover object-center max-w-11 max-h-11 overflow-hidden shrink-0 rounded-[50%]" />
                <div
                    class="text-black text-opacity-80 text-sm sm:text-lg self-center whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {{ ticket.createdby.name }}
                </div>
            </div>
        </td>
        <td
            class="text-black text-opacity-80 text-sm sm:text-lg w-1/4 sm:w-1/5 self-center sm:whitespace-nowrap sm:overflow-hidden sm:overflow-ellipsis">
            {{ ticket.title }}
        </td>
        <td class="text-black text-opacity-80 text-sm sm:text-lg w-1/4 sm:w-1/5">
            <div class="">
                <SimpleSelect :currentValue="ticket.assignedto" :newValues="technicians" @show-modal="showTicketModal" />
            </div>
        </td>
        <td class="text-white text-xs sm:text-base w-1/4 sm:w-1/5">
            <div class="">
                <div :style="{ backgroundColor: ticket.status.color }" class="py-2 px-1.5 sm:px-4 rounded-2xl w-fit">
                    {{ ticket.status.name }}
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