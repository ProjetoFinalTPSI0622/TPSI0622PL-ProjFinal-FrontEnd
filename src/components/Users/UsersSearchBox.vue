<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  searchTerm: String
});
</script>

<template>
    <span class="border bg-white flex justify-between w-40 lg:w-60 py-1 lg:py-0 lg:px-2.5 rounded-xl border-solid border-black border-opacity-20">
        <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8924cf9b87a9ac8c714bc39eb9f2f1e4dbacd969a523930ca05221671cf2023?apiKey=a9b902b8934746c7aacbbad131e88c89&"
            class="aspect-[1.5] object-contain object-center" />
        <input type="text"
            class="bg-transparent text-gray-900 focus:outline-none focus-visible:outline-none rounded-lg w-full lg:p-2.5"
            placeholder="Procurar... "
            :value="searchTerm"
            @input="$emit('update:searchTerm', $event.target.value)">
    </span>
</template>