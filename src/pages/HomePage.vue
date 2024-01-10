<script setup>

import Navbar from "../components/Navbar.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div class="h-screen w-screen">
    <Navbar />
    <div class="flex flex-row h-[92%] w-full">
      <SideBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>