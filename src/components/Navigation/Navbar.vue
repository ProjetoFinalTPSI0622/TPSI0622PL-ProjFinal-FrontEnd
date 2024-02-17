<script setup>

import { ref, reactive, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { NotificationsService } from '@/Services/NotificationsService'
import { UserService } from '@/Services/UserService';
import { NotificationHandler } from "@/Services/NotificationHandler.js";



const currentUser = ref(null);
const userInfo = ref(null);

const showDropdown = ref(false);
const notificationCount = ref(0);
const notifications = ref([]);

const dropdownItems = reactive([
    { id: 1, name: 'Settings', routeName: 'Account' },
    { id: 2, name: 'LogOut', routeName: 'Logout' }
],);
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
}

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
});

onUnmounted(() => {
  window.removeEventListener('user-updated', updateUserInfo);
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

</script>


<template>
    <div class="bg-white flex w-full h-[8vh] px-5 shadow-md place-content-between">

        <img src="../../assets/logo.png">

        <div class="flex flex-row h-full py-3.5 justify-end items-center sm:gap-4 ">

            <div class="relative bg-purple flex items-center justify-center rounded-3xl px-3 py-3 sm:p-2 hoverBlue">
                <!-- Ícone de Notificação -->
                <img class="w-7 sm:min-w-8" src="../../assets/Bell.svg" @click="toggleDropdown">
                <!-- Contador de Notificações -->
              <div v-if="notificationCount > 0">
                <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{{
                    notificationCount }}</span>
              </div>
                <!-- Dropdown de Notificações -->
                <div v-if="showDropdown"
                    class="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    <router-link v-for="notification in notifications"
                         @click.prevent="markAsSeen(notification.id)"
                        :to="{ name: 'ticketDetails', params: { ticketId: notification.ticketid } }" :key="notification.id"
                        href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <div v-html="notification.message"></div>

                    </router-link>
                </div>
            </div>
            <div
                class="relative bg-purple hidden md:flex flex-row h-full rounded-3xl items-center content-between py-5 pl-2 sm:gap-5 sm:pl-4 hoverBlue">
                <input type="checkbox" id="sortbox" class="hidden absolute">
                <label for="sortbox" class="flex items-center gap-2 cursor-pointer">
                    <img src="../../assets/Chevron Down.svg" >
                    <p class="hidden sm:block text-white text-xl">{{ currentUser ? currentUser.name : '' }} </p>
                    <p>{{ 	 }}</p>
            
                    
                    <img loading="lazy" v-if="userInfo?.user_info?.profile_picture_path" :src="userInfo.user_info.profile_picture_path" alt="Imagem Utilizador"
        class="aspect-square object-cover content-start w-12 overflow-hidden shrink-0 max-w-full rounded-[50%]" />
                </label>

                <div id="sortboxmenu"
                    class="absolute w-[80%] top-full min-w-max shadow rounded-2xl rounded-t-none opacity-0 bg-purple transition ease-in-out z-10">
                    <ul class="block text-right text-white">
                        <li v-for="item in dropdownItems" :key="item.id">
                            <router-link :to="{ name: item.routeName }" class="block px-3 py-2 hoverPurpleLight">
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