<template>
    <div
        class="bg-purple flex flex-row w-full h-14 py-4 px-8 place-content-between absolute bottom-0 min-w-14 sm:flex-col sm:w-[4.5%] sm:h-full sm:p-4 sm:relative sm:place-content-start sm:gap-10">
        <img class="min-w-6" src="../assets/home.svg">
        <router-link to="/ShowTicket" class="lg:w-full w-6"><img src="../assets/ticket.svg"></router-link>
        <img class="min-w-6" src="../assets/user.svg">
        <img class="min-w-6" src="../assets/pie-chart.svg">
        <img class="md:hidden min-w-4" src="../assets/Ellipse 5.svg">
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

