<script setup>
import SeachBox from '../SearchBox.vue';
import SideSection from '../SideSection.vue';
import SideSectionTop from '../SideSectionTop.vue';


</script>

<template>
    <SideSection>
        <SideSectionTop>Tickets</SideSectionTop>
        
        <div class="flex flex-col p-2 xl:p-5 gap-4">

            <SeachBox />

            <div class=" flex flex-col px-4 gap-2 xl:gap-4">
                <span
                    class="text-pink-600 text-l xl:text-lg justify-center py-3.5 border-b-purple border-b-opacity-30 border-b border-solid">
                    All tickets
                </span>
                <div class="justify-center py-3.5 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between flex gap-0">
                        <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                            Assigned to me
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div class="justify-center py-3.5 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between  flex gap-0">
                        <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                            My open tickets
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div class="justify-center flex flex-col gap-6 pt-2">
                    <span class="justify-between  flex gap-0">
                        <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                            Pending
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span><span class="justify-between flex">
                        <div class="text-purple text-l xl:text-lg">Unassigned</div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span><span class="justify-between flex gap-0">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Assigned
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span><span class="justify-between flex gap-0">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            In Progress
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span><span class="justify-between flex gap-0">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Completed
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span><span class="justify-between flex gap-0">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Solved
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
            </div>
        </div>
    </SideSection>
</template>