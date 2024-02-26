<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    ticket: Object,
});

</script>

<template>
    <div class="lg:flex flex-col xl:w-[20%]">
        <div class=" bg-grey flex flex-col flex-grow border-r-black border-r border-solid h-[92%]">
            <slot></slot>
        </div>
    </div>
</template>