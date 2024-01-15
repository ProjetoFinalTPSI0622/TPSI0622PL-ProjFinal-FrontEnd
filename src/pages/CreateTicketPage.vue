<script setup>
import SideSection from "../components/SideSection.vue";
import SideSectionTop from "../components/SideSectionTop.vue";

</script>

<template>
    <div class="flex w-full">
        <SideSection>
            <SideSectionTop>New Ticket</SideSectionTop>
            <div class="flex flex-col p-2 xl:p-5 gap-4">
                <div class="flex flex-col gap-3">
                    <span class="text-pink-600 text-l xl:text-lg justify-center">
                        Requester
                    </span>
                    <select
                        class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div class="flex flex-col gap-3">
                    <span class="text-pink-600 text-l xl:text-lg justify-center">
                        Category
                    </span>
                    <select
                        class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div class="flex flex-col gap-3">
                    <span class="text-pink-600 text-l xl:text-lg justify-center">
                        Urgency
                    </span>
                    <select
                        class="border bg-white flex justify-between w-40 lg:w-full py-1 lg:py-4 lg:px-2.5 rounded-lg border-solid border-black border-opacity-20">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
            </div>
        </SideSection>

        <div class="flex flex-col w-full lg:w-[80%]">

            <span
                class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-3 border-b-purple border-b-opacity-30 border-b border-solid items-start">
                <input type="text" placeholder="Title"
                    class="bg-grey text-black text-opacity-60 text-xl w-full pt-2 pb-1.5 px-3 rounded-xl border border-solid border-black border-opacity-20" />
            </span>
            <span
                class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-3 border-b-purple border-b-opacity-30 border-b border-solid items-start"></span>
        </div>
    </div>
</template>