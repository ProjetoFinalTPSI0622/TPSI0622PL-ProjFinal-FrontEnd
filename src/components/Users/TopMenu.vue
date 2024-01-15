<script setup>
import SimpleButton from '../SimpleButton.vue';
import SearchBox from '../SearchBox.vue';
</script>

<template>
    <span
        class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-4 border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div>All Users</div>
        <SimpleButton />
    </span>
    <div
        class="flex flex-row justify-between p-3 border-b-black border-b-opacity-30 border-b border-solid items-start">
        <span class="justify-center bg-purple flex gap-2.5 px-3 sm:px-6 py-[5.5px] rounded-xl">
            <div class="text-white sm:text-xl">Filter</div>
            <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0510fad93eca8f0eb44f11602487e1815b688bf1e81320ed0afe33b8cdcc0f34?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                class=" w-6 sm:aspect-[1.04] object-contain object-center " />
        </span>
        <div class="">
            <SearchBox />
        </div>
    </div>
    <span class="flex justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
        <div class="text-black text-opacity-60 sm:text-xl">1,253 Users</div>
        <div class="flex sm:gap-2.5">
            <span
                class="text-white sm:text-xl bg-purple aspect-[0.8148148148148148] justify-center px-1.5 py-0.5 rounded-md self-start">1</span><span
                class="text-black sm:text-xl aspect-[0.8148148148148148] justify-center px-1.5 py-0.5 rounded-md self-start">2</span><span
                class="text-black sm:text-xl aspect-[0.8148148148148148] justify-center px-1.5 py-0.5 rounded-md self-start">3</span><span
                class="text-black sm:text-xl aspect-[0.9629629629629629] justify-center px-1.5 py-0.5 rounded-md self-start">...</span><span
                class="text-black sm:text-xl aspect-[1.2222222222222223] justify-center px-1.5 py-0.5 rounded-md self-start">14</span>
        </div>
    </span>
    <span
        class=" flex justify-between p-5 md:px-20 lg:px-40 xl:px-60 py-3 border-b-black border-b-opacity-30 border-b border-solid">
        <div class="text-black text-opacity-60 text-sm sm:text-lg">NAME</div>
        <div class="hidden lg:block text-black text-opacity-60 text-sm sm:text-lg">EMAIL</div>
        <div class="text-black text-opacity-60 text-sm sm:text-lg">CLASS</div>
        <div class="text-black text-opacity-60 text-sm sm:text-lg">INTERNAL CODE</div>
    </span>
</template>