<template>

    <div class="bg-purple flex flex-row sm:flex-col w-full h-14 sm:w-20 p-4 place-content-between">
        <div class="flex flex-row sm:flex-col gap-10">
            <img src="../assets/home.svg">
          <router-link :to="{ name: 'ticket' }">
            <img src="../assets/ticket.svg" alt="ticket">
          </router-link>
            <img src="../assets/user.svg">
            <img src="../assets/pie-chart.svg">
            <img class="" src="../assets/Ellipse 5.svg">
        </div>
    </div>
</template>

<script setup>
import { router-link }  from 'vue-router'

</script>
