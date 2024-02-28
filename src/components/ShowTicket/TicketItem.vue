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
                <img loading="lazy" :src="ticket.createdby.user_info.profile_picture_path"
                    class="aspect-square object-cover object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
                <div class="flex flex-col h-full justify-center">
                    <div class="hidden sm:block text-black text-opacity-80 text-sm sm:text-lg whitespace-nowrap whitespace-ellipsis">
                        {{ ticket.createdby.name.slice(0,30) }}
                    </div>
                    <div class="hidden lg:block text-black text-opacity-50 text-sm sm:text-lg whitespace-nowrap">
                        {{ ticket.createdby.email }}
                    </div>
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