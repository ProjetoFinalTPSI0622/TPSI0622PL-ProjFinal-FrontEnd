<script setup>

import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TicketItem from '../components/ShowTicket/TicketItem.vue';
import TopMenu from '../components/ShowTicket/TopMenu.vue';

</script>

<template>
    <div class="flex w-full">

        <SideFilter />

        <span class="flex flex-col w-full lg:w-[80%]">

            <TopMenu />
            <div class="flex flex-col flex-grow">
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
                <TicketItem />
            </div>
        </span>
    </div>
</template>