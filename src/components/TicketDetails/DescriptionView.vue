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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</template>