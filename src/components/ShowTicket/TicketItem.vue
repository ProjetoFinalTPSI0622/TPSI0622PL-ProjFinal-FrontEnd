<script setup>
import { defineProps, ref } from 'vue';
import SelectAssign from '../SelectAssign.vue';
import { useTicketStore } from '../../Stores/TicketStore.js';

const props = defineProps({
    ticket: Object,
    technicians: Array
});

const ticketStore = useTicketStore(); 

const showTicketModal = (technicianID, oldValue) => {
    const ticketID = props.ticket.id;
    ticketStore.handleShowModal(technicianID, ticketID, oldValue);
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
            <div class="flex justify-center sm:justify-start sm:w-40">
                <SelectAssign :assignedto="ticket.assignedto" :technicians="technicians" @show-modal="showTicketModal" />
            </div>
        </td>
        <td class="text-white text-xs sm:text-lg">
            <div class="flex justify-center sm:block">
                <div class="bg-red-600 py-2 px-4 rounded-3xl w-fit">
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