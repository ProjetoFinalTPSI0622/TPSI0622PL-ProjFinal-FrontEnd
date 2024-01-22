<script setup>
import { defineProps } from 'vue';
import TicketItem from './TicketItem.vue';
import router from "../../router.js";

const props = defineProps({
    tickets: Array
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
    <table class="table-fixed">

        <thead>
            <tr class="border-b-black border-b-opacity-30 border-b border-solid">
                <th>REQUESTER</th>
                <th>TITLE</th>
                <th>ASSIGNEE</th>
                <th>STATUS</th>
            </tr>
        </thead>

        <tbody>
            <TicketItem @click="clickHandler(ticket.id)" v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
        </tbody>

    </table>
</template>

<style scoped>
th {
    padding-top: 1vh;
    padding-bottom: 1vh;
    text-align: left;
}

th:first-child {
    padding-left: 1vw;
}

tbody:hover {
    cursor: pointer;
}

</style>