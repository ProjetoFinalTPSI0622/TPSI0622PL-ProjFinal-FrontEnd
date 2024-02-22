<template>
  <div class="h-screen w-screen">
    <LoginAnimation>    
      <div class="flex flex-col items-center md:justify-center lg:py-0 md:max-w-screen-md">
        <!-- FORM -->
        <div class="w-full rounded-lg shadow flex flex-col items-center">
          <img class="mt-5 w-48 object-contain" src="../../assets/logo.png">
          <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
            <SignInView v-if="!showForgotView" @forgot="showForgotView = true" />  
            <ForgotView v-else @back="showForgotView = false" />
          </div>
        </div>
      </div>
    </LoginAnimation>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginAnimation from '@/layout/LoginAnimation.vue';
import SignInView from '@/components/Login/SignInView.vue';
import ForgotView from '@/components/Login/ForgotView.vue';

const showForgotView = ref(false);
</script>