<template>
    <div class="bg-white flex w-full h-[8vh] px-5 shadow-md place-content-between">

        <img src="../../assets/logo.png">

        <div class="flex flex-row h-full py-3.5 justify-end items-center sm:gap-4 ">

          <div class="relative bg-purple flex items-center justify-center rounded-3xl px-3 py-3 sm:p-2 hoverBlue">
            <!-- Ícone de Notificação -->
            <img class="w-7 sm:min-w-8" src="../../assets/Bell.svg" @click="toggleDropdown">
            <!-- Contador de Notificações -->
            <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{{ notificationCount }}</span>
            <!-- Dropdown de Notificações -->
            <div v-if="showDropdown" class="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <a v-for="notification in notifications" :key="notification.id" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {{ notification.message }}
              </a>
            </div>
          </div>

            <div
                class="relative bg-purple hidden md:flex flex-row h-full rounded-3xl items-center content-between py-5 pl-2 sm:gap-3 sm:pl-5 hoverBlue">
                <input type="checkbox" id="sortbox" class="hidden absolute">
                <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
                    <img src="../../assets/Chevron Down.svg">
                    <p class="hidden sm:block text-white text-xl">Jorge Alberto</p>
                    <img class="w-12" src="../../assets/Ellipse 5.svg">
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

<script setup>
//sorry goncalo idk how to use composition ou options ou whatever

import {ref, reactive, onBeforeMount} from 'vue'
import { NotificationsService } from '../../services/NotificationsService'

const showDropdown = ref(false);
const notificationCount = ref(0);
const notifications = ref([]);
const dropdownItems = reactive([
  { id: 1, name: 'yooooo', href: '#link1' },
  { id: 2, name: 'yooooo', href: '#link2' },
  { id: 3, name: 'Settings', routeName: 'Account' },
  { id: 4, name: 'LogOut', routeName: 'Logout' }
],);
const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
}

onBeforeMount(() => {
    checkNotificationCount();
    getNotifications();
});

const getNotifications = async () => {
    notifications.value = (await NotificationsService.getNotifications()).data;
    console.log(notifications.value);
}
const checkNotificationCount = async () => {
    notificationCount.value = (await NotificationsService.getNotificationsCount()).data.count;
}

setInterval(() => {
    checkNotificationCount();
}, 60000); //60 segundos
//TODO: depois temos de decidir quanto tempo queremos no setinterval




</script>


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