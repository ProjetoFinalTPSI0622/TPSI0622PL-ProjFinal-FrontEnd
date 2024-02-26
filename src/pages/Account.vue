<template>
  <div class="md:flex w-full">
    <SettingsBar />
    <div class="w-full align-middle">
      <div class="flex justify-center h-full items-center">
        <ShowUserForm :myuser="myuser" :isDisabled="true" class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { UserService } from "@/Services/UserService.js";
import SettingsBar from '@/components/Settings/SettingsBar.vue';
import ShowUserForm from '@/components/Users/ShowUserForm.vue';

const myuser = ref({});

onBeforeMount(async () => {
  try {
    const response = await UserService.getAuthedUser();
    if (response.success) {
      myuser.value = response.data;
    } else {
      console.error('Invalid response structure:', response);
    }
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
});

</script>