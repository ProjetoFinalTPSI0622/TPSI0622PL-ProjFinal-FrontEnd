<script setup>
import SimpleButton from '../SimpleButton.vue';
import SearchBox from '../SearchBox.vue';
</script>

<template>
    <span
        class="text-purple flex sm:text-2xl text-xl whitespace-nowrap justify-between p-4 border-b-purple border-b-opacity-30 border-b border-solid items-start">
        <div>All Users</div>
        <SimpleButton> + Add User </SimpleButton>
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
</template>