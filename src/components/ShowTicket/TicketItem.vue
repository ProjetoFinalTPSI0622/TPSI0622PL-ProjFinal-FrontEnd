<script setup>
import { defineProps } from 'vue';

defineProps({
    ticket: Object
});
</script>

<template>
    <tr class="border-b-black border-b-opacity-30 border-b border-solid hoverGrey">
        <td>
            <div class="flex gap-2.5 min-w-fit">
                <img loading="lazy"
                    src="../../assets/MoNengue.jpg"
                    class="aspect-square object-cover object-center w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
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
            {{ ticket.assignedto ? ticket.assignedto.name : 'Unassigned' }}
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