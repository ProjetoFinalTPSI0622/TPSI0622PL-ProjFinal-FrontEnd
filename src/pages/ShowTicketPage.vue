<script setup>

import SideFilter from '../components/ShowTicket/SideFilter.vue';
import TicketItem from '../components/ShowTicket/TicketItem.vue';

</script>

<template>
    <div class="flex w-full">
        <SideFilter />
        <span class="flex flex-col w-[80%]"><span
                class="text-purple text-2xl whitespace-nowrap justify-center pl-5 pr-16 py-5 border-b-purple border-b-opacity-30 border-b border-solid items-start  max-md:pr-5">
                All Tickets</span>
            <div
                class="flex flex-col justify-center pl-4 p-4 border-b-black border-b-opacity-30 border-b border-solid items-start">
                <span class="justify-center  bg-purple flex gap-2.5 px-6 py-[5.5px] rounded-xl">
                    <div class="text-white text-xl">Filter</div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0510fad93eca8f0eb44f11602487e1815b688bf1e81320ed0afe33b8cdcc0f34?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                        class="aspect-[1.04] object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full self-start" />
                </span>
            </div>
            <span class="flex w-full justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
                <div class="text-black text-opacity-60 text-xl">1,253 tickets</div>
                <div class="flex gap-2.5">
                    <span
                        class="text-white text-xl bg-purple aspect-[0.8148148148148148] justify-center px-1.5 py-0.5 rounded-md self-start">1</span><span
                        class="text-black text-xl aspect-[0.8148148148148148] justify-center px-1.5 py-0.5 rounded-md self-start">2</span><span
                        class="text-black text-xl aspect-[0.8148148148148148] justify-center px-1.5 py-0.5 rounded-md self-start">3</span><span
                        class="text-black text-xl aspect-[0.9629629629629629] justify-center px-1.5 py-0.5 rounded-md self-start">...</span><span
                        class="text-black text-xl aspect-[1.2222222222222223] justify-center px-1.5 py-0.5 rounded-md self-start">14</span>
                    <div
                        class="items-cente self-stretch flex aspect-[1.1428571428571428] flex-col justify-center px-1 py-0.5 rounded-md">
                        <img loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43be8e76205647d86454709b3d2675551aac152fb12f4812684e8cb96e2a82cf?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                            class="aspect-square object-contain object-center w-6 overflow-hidden" />
                    </div>
                </div>
            </span>
            <span class=" flex justify-between pl-5 pr-28 py-3 border-b-black border-b-opacity-30 border-b border-solid">
                <div class="text-black text-opacity-60 text-lg">REQUESTER</div>
                <div class="text-black text-opacity-60 text-lg">TITLE</div>
                <div class="text-black text-opacity-60 text-lg">ASSIGNEE</div>
                <div class="text-black text-opacity-60 text-lg">STATUS</div>
            </span>

            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
            <TicketItem />
        </span>
    </div>           
</template>