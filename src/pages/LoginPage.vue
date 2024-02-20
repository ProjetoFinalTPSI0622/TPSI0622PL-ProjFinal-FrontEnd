<template>
  <div class="h-screen w-screen">
    <div class="flex items-center flex-col h-[90%] w-full">
      <div class="flex flex-col items-center">
        <LoginComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginComponent from '@/components/Login/Login.vue'
</script>