<template>
    <div
        class="bg-purple flex flex-row w-full h-14 py-4 px-8 place-content-between fixed bottom-0 min-w-14 sm:flex-col sm:w-[4.5%] sm:h-full sm:p-4 sm:relative sm:place-content-start sm:gap-10">

        <router-link to="/" class="lg:w-full w-6"><img src="../../assets/home.svg"></router-link>
        <router-link to="/tickets/show" class="lg:w-full w-6"><img src="../../assets/ticket.svg"></router-link>
        <router-link v-if="authedUserStore.userRole === 'admin'" to="/users" class="lg:w-full w-6"><img
                src="../../assets/user.svg"></router-link>
        <router-link v-if="authedUserStore.userRole === 'admin' || authedUserStore.userRole === 'technician'"
            to="/dashboard" class="lg:w-full w-6"><img src="../../assets/pie-chart.svg"></router-link>
        <router-link v-if="authedUserStore.userRole === 'admin'" to="/settings/configurations" class="lg:w-full w-6"><img
                src="../../assets/settings.svg"></router-link>
        
        <div v-if="user" class="lg:w-full w-6 md:hidden min-w-4" ref="secondIconRef" @click.stop="toggleSecondDropdown">
            <img :src="user.user_info.profile_picture_path">
            <div v-if="showSecondDropdown" @click.stop="toggleSecondDropdown" ref="secondDropdownRef"
                class="absolute top-full right-0 mt-2.5 py-2 w-44 bg-white rounded-md shadow-xl z-20 border border-black border-opacity-20">
                <ul class="block text-right">
                    <li v-for="item in dropdownItems" :key="item.id">
                        <router-link :to="{ name: item.routeName }" class="block px-3 py-2 text-gray-700 hoverBlue">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useAuthedUserStore } from '@/Stores/UserStore.js';
import { ref, reactive, onBeforeMount } from 'vue';
import { UserService } from '@/services/UserService.js';

const authedUserStore = useAuthedUserStore();
const showSecondDropdown = ref(false);
const secondDropdownRef = ref(null);
const secondIconRef = ref(null);
const user = ref(null);


onBeforeMount(async () => {
    await authedUserStore.fetchAuthedUser();
    user.value = (await UserService.getUser(authedUserStore.currentUser.id)).data;
});

const dropdownItems = reactive([
    { id: 1, name: 'Definições de conta', routeName: 'Account' },
    { id: 2, name: 'Terminar sessão', routeName: 'Logout' }
]);

const toggleSecondDropdown = () => {
    showSecondDropdown.value = !showSecondDropdown.value;
};

</script>
