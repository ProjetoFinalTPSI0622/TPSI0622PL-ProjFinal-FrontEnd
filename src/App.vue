<script setup>
import AccountSettings from './components/Settings/AccountSettings.vue';


import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'


<template>
  <div class="h-screen w-screen">
    <Navbar />
    <div class="flex flex-row h-[90%] w-full">
      <SideBar />
      <router-view />
    </div>
  </div>
</template>


<style scoped>
  
</style>

