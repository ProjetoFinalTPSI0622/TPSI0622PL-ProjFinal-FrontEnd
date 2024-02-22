<!-- PARA EU SABER QUE É  APAG PRINCIPAL -->

<template>
    <div class="h-screen w-full grid grid-cols-2 grid-rows-2">
    <div class="border border-gray-200">
        <TicketsPerDay />
    </div>
    <div class="border border-gray-200">
        <!-- <h1 class="text-center ">Numero de tickets por estados</h1> -->
        <TicketsByStatus />
    </div>
    <div class="border border-gray-200">
        <!-- Outro dashBoard -->
        <TicketsByCategories />
    </div>
    <div class="border border-gray-200">
        <!-- Outro Dashboard -->
        <MetricByCategories />
    </div>
  </div>
  </template>
  
  <script>

  import MetricByCategories from '@/components/Dashboard/MetricByCategories.vue';
  import TicketsPerDay from '@/components/Dashboard/TicketsPerDay.vue'
  import TicketsByStatus from '@/components/Dashboard/TicketsByStatus.vue'
  import TicketsByCategories from '@/components/Dashboard/TicketsByCategories.vue';
  
  
  export default {
    name: 'App',
    components: { TicketsPerDay, TicketsByStatus, MetricByCategories, TicketsByCategories}
  }
  </script>
  