<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  ticket: Object,
});

</script>

<template>
    <div class="hidden lg:flex flex-col xl:w-[20%]">
        <div class=" bg-grey flex flex-col flex-grow border-r-black border-r border-solid">
            <slot></slot>
        </div>
    </div>
</template>