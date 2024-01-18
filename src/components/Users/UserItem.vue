<script setup>
import { defineProps } from 'vue';

defineProps({
    user: Object
});
</script>

<template>
    
    <tr class="border-b-black border-b-opacity-30 border-b border-solid">
        <td class="flex flex-col md:flex-row gap-2.5">
            <img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7f9a865a14634880b34233ea7c93cecbd1c3d02a621bf56822d3ea81695bb865?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
            <span class="flex">
                <div class="text-black text-opacity-80 text-sm sm:text-lg self-center">
                    {{ user.name }}
                </div>
            </span>
        </td>
        
        <td >{{ user.email }}</td>
        <td>**TPSI0622**</td>
        <td>{{ user.internalcode }}</td>
    </tr>

</template>

<style scoped>

td{
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}

td:first-child {
  padding-left: 140px;
}

</style>