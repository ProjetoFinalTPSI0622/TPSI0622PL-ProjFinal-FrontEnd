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
      <tr class="border-b-black border-b-opacity-30 border-b border-solid">
        <th class="pl-2.5 text-sm text-left py-2.5 sm:text-center">NOME</th>
        <th class="hidden sm:table-cell">EMAIL</th>
        <th>TURMA</th>
        <th>CÓDIGO INTERNO</th>
        <th>ACÇÕES</th>
      </tr>
    </thead>

    <tbody>
      <UserItem @click.stop="clickHandler(user.id)" v-for="user in users" :key="user.id" :user="user" @userDeleted="DeleteUser" />
    </tbody>

  </table>
</template>
