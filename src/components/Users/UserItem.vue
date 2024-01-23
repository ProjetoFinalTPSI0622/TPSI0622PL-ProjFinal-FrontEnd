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
            :src="user.user_info.profile_picture_path"
                class="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
            <span class="flex">
                <div class="text-black text-opacity-80 text-sm sm:text-lg self-center">
                    {{ user.name }}
                </div>
            </span>
        </td>
        
        <td >{{ user.email }}</td>
        <td>{{ user.user_info.class }}</td>
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