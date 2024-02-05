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
            <tr class="border-b-black border-b-opacity-30 border-b border-solid">
                <th class="hidden sm:flex pl-5">REQUESTER</th>
                <th>TITLE</th>
                <th>ASSIGNEE</th>
                <th>STATUS</th>
            </tr>
        </thead>

        <tbody>
            <TicketItem @click="clickHandler(ticket.id)" v-for="ticket in tickets" :key="ticket.id" :ticket="ticket"
                :technicians="technicians" />
        </tbody>

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
</style>