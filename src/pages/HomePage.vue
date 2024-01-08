<script setup>

import Navbar from "../components/Navbar.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div class="h-screen w-screen">
    <Navbar />
    <router-view />
    <SideBar />
  </div>
</template>

<style scoped lang="scss"></style>