<template>
    <div
        class="bg-purple flex flex-row w-full h-14 py-4 px-8 place-content-between fixed bottom-0 min-w-14 sm:flex-col sm:w-[4.5%] sm:h-full sm:p-4 sm:relative sm:place-content-start sm:gap-10">

        <router-link to="/" class="lg:w-full w-6"><img src="../../assets/home.svg"></router-link>
        <router-link to="/tickets/show" class="lg:w-full w-6"><img src="../../assets/ticket.svg"></router-link>
        <router-link v-if="authedUserStore.userRole === 'admin'" to="/users" class="lg:w-full w-6"><img src="../../assets/user.svg"></router-link>
        <router-link to="/dashboard" class="lg:w-full w-6"><img src="../../assets/pie-chart.svg"></router-link>
        <router-link to="/settings/configurations" class="lg:w-full w-6"><img src="../../assets/settings.svg"></router-link>
        <img class="md:hidden min-w-4" src="../../assets/Ellipse 5.svg">
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onBeforeMount } from 'vue';
import { useAuthedUserStore } from '@/Stores/UserStore.js';

const authedUserStore = useAuthedUserStore();

onBeforeMount(async () => {
    await authedUserStore.fetchAuthedUser();
});

</script>
