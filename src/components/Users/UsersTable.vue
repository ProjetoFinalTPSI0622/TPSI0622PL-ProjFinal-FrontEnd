<script setup>
import { defineProps } from 'vue';
import UserItem from './UserItem.vue';

const props = defineProps({
  users: Array
});
</script>

<template>
  <table>

    <thead>
      <tr class="border-b-black border-b-opacity-30 border-b border-solid">
        <th>NAME</th>
        <th>EMAIL</th>
        <th>CLASS</th>
        <th>INTERNAL CODE</th>
      </tr>
    </thead>
    <tbody>
      <UserItem v-for="user in users" :key="user.id" :user="user" />
    </tbody>

  </table>
</template>

<style scoped>

th{
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}

th:first-child {
  padding-left: 140px;
}
</style>