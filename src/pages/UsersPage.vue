<script setup>

import { ref, computed, watch, onBeforeMount } from 'vue';
import { UserService } from '@/Services/UserService';
import TopMenu from '@/components/Users/TopMenu.vue';
import UsersTable from '@/components/Users/UsersTable.vue';
import Next from 'vue-material-design-icons/ChevronRightCircleOutline.vue'
import Previous from 'vue-material-design-icons/ChevronleftCircleOutline.vue'

const users = ref([]);
const currentPage = ref(1);
const usersPerPage = ref(5);
const searchTerm = ref('');

const visiblePages = computed(() => {
  let pages = [];
  const total = totalPages.value;
  const current = currentPage.value;
  let startPage = Math.max(current - 2, 1);
  let endPage = startPage + 4;

  if (endPage > total) {
    endPage = total;
    startPage = Math.max(1, endPage - 4);
  }

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  return pages;
});

//Obtem os usuários que serão exibidos na página atual
const displayedUsers = computed(() => {
  const filteredUsers = users.value.filter((user) => {
    return user.name?.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      user.internalcode?.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      user.user_info?.class?.toLowerCase().includes(searchTerm.value.toLowerCase());
  });

  const startIndex = (currentPage.value - 1) * usersPerPage.value;
  const endIndex = startIndex + usersPerPage.value;
  return filteredUsers.slice(startIndex, endIndex);
});

const loadUsers = async () => {
  try {
    users.value = (await UserService.getUsers()).data;
  } catch (error) {
    console.error("Erro ao procurar usuários:", error);
  }
};

//Obtem os usuários da API
onBeforeMount(async () => {
  await loadUsers();
});

//Obtem o número total de páginas
const totalPages = computed(() => {
  return Math.ceil(users.value.length / usersPerPage.value);
});

//Muda a página atual
const changePage = (page) => {
  currentPage.value = Math.max(1, Math.min(page, totalPages.value));
};

watch(searchTerm, () => {
  currentPage.value = 1;
});
</script>

<template>
  <div class="flex w-full">

    <span class="flex flex-col w-full">
      <TopMenu :searchTerm="searchTerm" @update:searchTerm="searchTerm = $event" />

      <span class="flex justify-between px-5 py-2 border-b-black border-b-opacity-30 border-b border-solid">
        <div class="text-black text-opacity-60 sm:text-xl">{{ users.length }} Users</div>
        <div class="flex gap-1 sm:gap-2.5">

          <select v-model="usersPerPage" @change="changePage(1)">
            <option value="5">5 por pagina</option>
            <option value="10">10 por pagina</option>
            <option value="20">20 por pagina</option>
            <option :value="users.length">All</option>
          </select>

          <button v-if="currentPage > 1" @click="changePage(currentPage - 1)"
            class="text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer">
            <Previous />
          </button>

          <span v-for="page in visiblePages" :class="['text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer',
            { 'bg-purple text-white': page === currentPage, 'aspect-[0.8148148148148148]': true }]" :key="page"
            @click="changePage(page)">

            {{ page }}
          </span>

          <button v-if="currentPage < totalPages" @click="changePage(currentPage + 1)"
            class="text-black sm:text-xl justify-center px-1.5 py-0.5 rounded-md self-start cursor-pointer">
            <Next />
          </button>

        </div>
      </span>


      <UsersTable :users="displayedUsers" @userDeleted="loadUsers" />
    </span>
  </div>
</template>