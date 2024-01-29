<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { UserService } from "../Services/UserService.js";
import ShowUserForm from '../components/Users/ShowUserForm.vue';

const route = useRoute();
const myuser = ref({});

onBeforeMount(async () => {
  try {
    const response = await UserService.getUser(route.params.userId);
    if (response.success) {
      myuser.value = response.data;
      console.log('User Data:', myuser);
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
});


</script>

<template>
  <div class="flex flex-col w-full xl:items-center">
    <ShowUserForm :myuser="myuser" />
  </div>
</template>