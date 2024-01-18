<script setup>
import { defineProps } from 'vue';

defineProps({
    ticket: Object
});
</script>

<template>
    <tr class="border-b-black border-b-opacity-30 border-b border-solid ">
        <td >
            <div class="flex gap-2.5 min-w-fit">
                <img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                class="aspect-square object-contain object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
                <div class="flex flex-col h-full justify-center">
                    <div class="hidden sm:block text-black text-opacity-80 text-sm sm:text-lg">
                        {{ ticket.createdby.name }}
                    </div>
                    <div class="hidden xl:block text-black text-opacity-50 text-sm sm:text-lg whitespace-nowrap">
                        {{ ticket.createdby.email }}
                    </div>
                </div>
            </div>
        </td>
        <td class="text-black text-opacity-80 text-sm sm:text-lg">
            <div class="flex">

                {{ ticket.title }}
            </div>
        </td>
        <td class="text-black text-opacity-80 text-sm sm:text-lg">
            {{ ticket.assigned_to.name }}
        </td>
        <td class="text-white text-center text-xs sm:text-lg whitespace-nowrap">
            <div class="bg-red-600 py-2 px-4 rounded-3xl w-fit">
                {{ ticket.status.status_name }}
            </div>
        </td>
    </tr>
</template>

<style scoped>
td {
    padding-top: 2vh;
    padding-bottom: 2vh;
}

td:first-child {
    padding-left: 1vw;
}
</style>