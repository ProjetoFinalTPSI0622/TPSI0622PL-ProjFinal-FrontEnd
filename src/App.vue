<script setup>
import Navbar from './components/master/Navbar.vue'
import SideBar from './components/master/SideBar.vue'
</script>

<template>
  <div class="h-screen w-screen">
    <Navbar />
    <div class="flex h-[90%] w-full">
      <!-- <SideBar /> -->
      <router-view />
    </div>
  </div>
</template>


<style scoped></style>

