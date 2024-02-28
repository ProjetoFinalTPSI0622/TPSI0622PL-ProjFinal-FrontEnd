<script setup>
import { defineProps } from 'vue';
import TicketItem from './TicketItem.vue';
import router from "../../router.js";

const props = defineProps({
    tickets: Array,
    technicians: Array
});

const clickHandler = (id) => {

    router.push({
        name: 'ticketDetails',
        params: {
            ticketId: id
        }
    });
}

</script>

<template>
    <table class="table-auto">

        <thead>
            <tr class="border-b-black border-b-opacity-30 border-b border-solid flex justify-between">
                <th class="hidden sm:block pl-5 w-1/5">CRIADO POR</th>
                <th class="w-1/4 sm:w-1/5">TITULO</th>
                <th class="w-1/4 sm:w-1/5">TÉCNICO</th>
                <th class="w-1/4 sm:w-1/5">ESTADO</th>
            </tr>
        </thead>

        <div class="max-h-[57vh] sm:max-h-[58vh] lg:max-h-[62vh] overflow-y-auto">
            <tbody>
                <TicketItem @click="clickHandler(ticket.id)" v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"
                    :technicians="technicians" v-if="tickets.length > 0"/>
                    <div v-else class="lg:h-[62vh] flex flex-col justify-center items-center gap-2">
                        <p class="text-3xl font-bold opacity-80" >SEM TICKETS</p>
                        <img src="@/assets/noTicket.svg" class="opacity-80" />
                    </div>
            </tbody>
        </div>

    </table>
</template>

<style scoped>
th {
    padding-top: 1vh;
    padding-bottom: 1vh;
    @apply sm:text-left;
}

tbody:hover {
    cursor: pointer;
}

table {
    display: block;
    width: 100%;
}

thead {
    display: table;
    width: 100%;
    table-layout: fixed;
}

tbody {
    display: table;
    width: 100%;
}

</style>