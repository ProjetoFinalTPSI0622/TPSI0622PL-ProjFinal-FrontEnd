<script setup>

const props = defineProps({
    description: String
});
</script>

<template>
    <div class="flex gap-4">
        <div class="flex flex-col text-lg gap-4 text-wrap">
            <div class="flex gap-1">
                <img src="../../assets/description.svg" />
                <p class="text-2xl ">
                    Ticket Description
                </p>
            </div>
            <p class="text-black text-opacity-70">
                {{ description }}
            </p>
        </div>
    </div>
</template>