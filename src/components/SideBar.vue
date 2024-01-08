<template>
    <div class="bg-purple flex flex-col w-20 h-full p-5 place-content-between">
        <div class="flex flex-col gap-10">
            <img src="../assets/home.svg">
          <router-link :to="{ name: 'ticket' }">
            <img src="../assets/ticket.svg" alt="ticket">
          </router-link>
            <img src="../assets/user.svg">
            <img src="../assets/pie-chart.svg">
        </div>
    </div>
</template>

<script setup>
import { router-link }  from 'vue-router'

</script>
