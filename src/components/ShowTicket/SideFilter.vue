<script setup>
import SideSection from '../SideSection.vue';
import SideSectionTop from '../SideSectionTop.vue';

const emit = defineEmits(['update:status'])

const updateStatus = (status) => {
    emit('update:status', status)
}
</script>

<template>
    <SideSection>
        <SideSectionTop>Tickets</SideSectionTop>

        <div class="flex flex-col py-2 gap-4">
            <div class=" flex flex-col px-4 gap-2 xl:gap-4">
                <span @click="updateStatus('All')"
                    class="hoverGreyDark rounded-t-lg text-pink-600 text-l xl:text-lg justify-center py-3.5 px-2 border-b-purple border-b-opacity-30 border-b border-solid">
                    Todos os tickets
                </span>
                <div class="hoverGreyDark rounded-t-lg justify-center py-3.5 px-2 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between flex">
                        <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                            Assignados a mim
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div class="hoverGreyDark rounded-t-lg justify-center py-3.5 px-2 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                    <span class="justify-between flex">
                        <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                            Os meus tickets
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                </div>
                <div class="justify-center flex flex-col pt-2">
                    <span class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg" @click="updateStatus('Pending')">
                        <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                            Pending
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg" @click="updateStatus('Unassigned')">
                        <div class="text-purple text-l xl:text-lg">
                            Unassigned</div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg" @click="updateStatus('Assigned')">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Assigned
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg" @click="updateStatus('In Progress')">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            In Progress
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg" @click="updateStatus('Completed')">
                        <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                            Completed
                        </div>
                        <span
                            class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                    </span>
                    <span class="justify-between flex py-3 px-2 hoverGreyDark rounded-lg" @click="updateStatus('Solved')">
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