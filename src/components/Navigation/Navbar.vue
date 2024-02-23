<script setup>
import { ref, reactive, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { NotificationsService } from '@/Services/NotificationsService'
import { UserService } from '@/Services/UserService';
import { NotificationHandler } from "@/Services/NotificationHandler.js";

const currentUser = ref(null);
const userInfo = ref(null);

const dropdownRef = ref(null);
const bellIconRef = ref(null);
const showDropdown = ref(false);
const secondIconRef = ref(null);

const showSecondDropdown = ref(false);
const secondDropdownRef = ref(null);

const notificationCount = ref(0);
const notifications = ref([]);

const dropdownItems = reactive([
    { id: 1, name: 'Definições de conta', routeName: 'Account' },
    { id: 2, name: 'Terminar sessão', routeName: 'Logout' }
]);

const fetchUser = async () => {
    currentUser.value = (await UserService.getAuthedUser()).data;
    userInfo.value = (await UserService.getUser(currentUser.value.id)).data;
};

onBeforeMount(async () => {
    await checkNotificationCount();
    await getNotifications();
    await fetchUser();
});

const updateUserInfo = () => {
    fetchUser();
};

onMounted(() => {
    window.addEventListener('user-updated', updateUserInfo);
    window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    window.removeEventListener('user-updated', updateUserInfo);
    window.removeEventListener('click', handleClickOutside);
});

const getNotifications = async () => {
    notifications.value = NotificationHandler((await NotificationsService.getNotifications()).data);
}

const checkNotificationCount = async () => {
    const oldValue = notificationCount.value;
    notificationCount.value = (await NotificationsService.getNotificationsCount()).data.count;
    if (oldValue !== notificationCount.value) {
        await getNotifications();
    }
}

const markAsSeen = async (id) => {
    await NotificationsService.markAsSeen(id);
    await checkNotificationCount();
}

setInterval(() => {
    checkNotificationCount();
}, 60000); //60 segundos
//TODO: depois temos de decidir quanto tempo queremos no setinterval

const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target) && !bellIconRef.value.contains(event.target)) {
        showDropdown.value = false;
    }
    if (secondDropdownRef.value && !secondDropdownRef.value.contains(event.target) && !secondIconRef.value.contains(event.target)) {
        showSecondDropdown.value = false;
    }
};

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
    if (showDropdown.value) {
        showSecondDropdown.value = false;
    }
}

const toggleSecondDropdown = () => {
    showSecondDropdown.value = !showSecondDropdown.value;
    if (showSecondDropdown.value) {
        showDropdown.value = false;
    }
};
</script>

<template>
    <div class="bg-white flex w-full h-[8vh] px-5 shadow-md place-content-between">
        <img src="../../assets/logo.png">
        <div class="flex flex-row h-full py-3.5 justify-end items-center sm:gap-2 ">
            <div @click.stop="toggleDropdown" ref="bellIconRef" class="relative bg-purple flex items-center justify-center rounded-3xl px-2 py-1.5  hoverBlue">
                <img class="w-7 sm:min-w-8" src="../../assets/Bell.svg" >
                <div v-if="notificationCount > 0">
                    <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{{
                        notificationCount }}</span>
                </div>
                <div v-if="showDropdown" @click.stop ref="dropdownRef"
                    class="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 h-44 overflow-y-auto border border-black border-opacity-20">
                    <router-link v-for="notification in notifications" @click.prevent="markAsSeen(notification.id)"
                        :to="{ name: 'ticketDetails', params: { ticketId: notification.ticketid } }" :key="notification.id"
                        href="#" class="block px-4 py-2 text-sm text-gray-700 hoverBlue">
                        <div v-html="notification.message"></div>
                    </router-link>
                </div>
            </div>
            <div ref="secondIconRef" @click.stop="toggleSecondDropdown"
                class="relative bg-purple hidden md:flex flex-row h-full rounded-3xl items-center content-between py-5 pl-2 gap-2 hoverBlue">
                <img class="w-7 sm:min-w-8" src="../../assets/Chevron Down.svg" >
                <p class="hidden sm:block text-white text-xl">{{ currentUser ? currentUser.name : '' }} </p>
                <img loading="lazy" v-if="userInfo?.user_info?.profile_picture_path"
                    :src="userInfo.user_info.profile_picture_path" alt="Imagem Utilizador"
                    class="aspect-square object-cover content-start w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
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
    </div>
</template>

<style>
#sortbox:checked~#sortboxmenu {
    opacity: 1;
    visibility: visible;
}

#sortboxmenu {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
}
</style>