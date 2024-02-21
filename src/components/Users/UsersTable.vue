<script setup>
import { defineProps } from 'vue';
import UserItem from './UserItem.vue';
import router from "../../router.js";
import { defineEmits } from 'vue';

const emit = defineEmits(['userDeleted']);

const props = defineProps({
  users: Array
});

const clickHandler = (id) => {

  router.push({
    name: 'userDetails',
    params: {
      userId: id
    }
  });
}

const DeleteUser = () => {
  emit("userDeleted");
}

</script>

<template>
  <table class="table-auto">

    <thead>
      <tr class="grid grid-cols-3 sm:grid-cols-4 pl-[10%] pr-[5%] sm:pl-[20%] sm:pr-[15%] border-b-black border-b-opacity-30 border-b border-solid">
        <th class="w-1/4 self-center">NOME</th>
        <th class="hidden sm:block w-1/4 self-center">TURMA</th>
        <th class="hidden lg:block w-1/4 self-center">CÓDIGO INTERNO</th>
        <th class="w-1/4 self-center">ACÇÕES</th>
      </tr>
    </thead>

    <div class="max-h-[55vh] sm:max-h-[59vh] overflow-y-auto">
      <tbody>
        <UserItem @click.stop="clickHandler(user.id)" v-for="user in users" :key="user.id" :user="user"
          @userDeleted="DeleteUser" />
      </tbody>
    </div>

  </table>
</template>

<style scoped>
th {
  padding-top: 1vh;
  padding-bottom: 1vh;
  @apply sm:text-left;
}

tbody:hover {
  cursor: pointer;
}

table {
  display: block;
  width: 100%;
}

thead {
  display: table;
  width: 100%;
  table-layout: fixed;
}

tbody {
  display: table;
  width: 100%;
}
</style>
