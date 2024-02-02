<!-- PARA EU SABER QUE É  APAG PRINCIPAL -->

<template>
    <div class="h-screen w-full grid grid-cols-2 grid-rows-2">
    <div class="border border-gray-200">
        <TicketsPerDay />
    </div>
    <div class="border border-gray-200">
        <TicketsByStatus />
    </div>
    <div class="border border-gray-200">
        <!-- <TicketsPerDay /> -->
    </div>
    <div class="border border-gray-200">
        <!-- <TicketsPerDay /> -->
    </div>
  </div>
  </template>
  
  <script>
  import TicketsPerDay from '../components/Dashboard/TicketsPerDay.vue'
  import TicketsByStatus from '../components/Dashboard/TicketsByStatus.vue'


  export default {
    name: 'App',
    components: { TicketsPerDay, TicketsByStatus }
  }
  </script>
  