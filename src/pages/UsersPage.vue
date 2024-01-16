<script setup>

import { onMounted, ref } from 'vue';
import { getUsers } from '../Services/UserService';
import TopMenu from '../components/Users/TopMenu.vue';
import UserItem from '../components/Users/UserItem.vue';

const users = ref([]);

onMounted(async () => {
    try {
    users.value = await getUsers();
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    // Aqui você pode lidar com o erro como achar necessário
  }
});

</script>

<template>
    <div class="flex w-full">

        <span class="flex flex-col w-full">
            <TopMenu />
            <UserItem v-for="user in users" :key="user.id" :user="user"/>
        </span>
    </div>
</template>