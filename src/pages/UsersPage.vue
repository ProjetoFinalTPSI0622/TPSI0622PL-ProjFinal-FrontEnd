<script setup>

import { onMounted, ref, computed } from 'vue';
import { getUsers } from '../Services/UserService';
import TopMenu from '../components/Users/TopMenu.vue';
import UsersTable from '../components/Users/UsersTable.vue';

const users = ref([]);
const currentPage = ref(1);
const usersPerPage = ref(5);

const displayedUsers = computed(() => {
  const startIndex = (currentPage.value - 1) * usersPerPage.value;
  const endIndex = startIndex + usersPerPage.value;
  return users.value.slice(startIndex, endIndex);
});

onMounted(async () => {
  try {
    users.value = await getUsers();
  } catch (error) {
    console.error("Erro ao procurar usuários:", error);
  }
});

const totalPages = computed(() => {
  return Math.ceil(users.value.length / usersPerPage.value);
});

const changePage = (page) => {
  currentPage.value = page;
};
</script>

<template>
  <div class="flex w-full">

    <span class="flex flex-col w-full">
      <TopMenu />

      <span class="flex justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
        <div class="text-black text-opacity-60 sm:text-xl">{{ users.length }} Users</div>
        <div class="flex sm:gap-2.5">
          <span v-for="page in totalPages"
                :class="['text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer', 
                         {'bg-purple text-white': page === currentPage, 'aspect-[0.8148148148148148]': true}]"
                :key="page"
                @click="changePage(page)">
            {{ page }}
          </span>
        </div>
      </span>


      <UsersTable :users="displayedUsers" />
    </span>
  </div>
</template>