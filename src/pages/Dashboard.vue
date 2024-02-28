<!-- PARA EU SABER QUE É  APAG PRINCIPAL -->

<template>
    <div class="overflow-auto w-full h-[78vh] md:h-full">
        <div class="h-screen w-full grid md:grid-cols-2 md:grid-rows-2 gap-5 mt-5">
            <h3 class="text-lg font-bold ml-3 md:hidden text-purple">Numero de tickets por dia</h3>    
            <div class="border border-gray-200">
                <TicketsPerDay />
            </div>
            <h3 class="text-lg font-bold ml-3 md:hidden text-purple">Numero de tickets por estados</h3>    
            <div class="border border-gray-200">
                <!-- <h1 class="text-center ">Numero de tickets por estados</h1> -->
                <TicketsByStatus />
            </div>
            <h3 class="text-lg font-bold ml-3 md:hidden text-purple">Numero de tickets por categoria</h3>    
            <div class="border border-gray-200">
                <!-- Outro dashBoard -->
                <TicketsByCategories />
            </div>
            <h3 class="text-lg font-bold ml-3 md:hidden text-purple">Metricas por categoria</h3>    
            <div class="border border-gray-200">
                <!-- Outro Dashboard -->
                <MetricByCategories />
            </div>
        </div>
  </div>
  </template>
  
  <script>

  import MetricByCategories from '@/components/Dashboard/MetricByCategories.vue';
  import TicketsPerDay from '@/components/Dashboard/TicketsPerDay.vue'
  import TicketsByStatus from '@/components/Dashboard/TicketsByStatus.vue'
  import TicketsByCategories from '@/components/Dashboard/TicketsByCategories.vue';
  import FormTitle from '../components/Form/FormTitle.vue';
  
  
  export default {
    name: 'App',
    components: { FormTitle, TicketsPerDay, TicketsByStatus, MetricByCategories, TicketsByCategories}
  }
  </script>
  