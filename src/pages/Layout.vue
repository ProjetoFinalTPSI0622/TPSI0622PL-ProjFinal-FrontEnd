<script setup>

import Navbar from "../components/Navigation/Navbar.vue";
import SideBar from "../components/Navigation/SideBar.vue";
</script>

<template>
  <div class="h-screen w-screen">
    <Navbar />
    <div class="flex flex-row sm:h-[92%] w-full">
      <SideBar />
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>