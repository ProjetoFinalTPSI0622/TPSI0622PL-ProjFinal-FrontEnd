<template>
  <div class="h-screen w-screen ">
  <LoginAnimation>    
    <div class="flex flex-col items-center md:justify-center lg:py-0 md:max-w-screen-md">
        <!-- IMAGE -->
        <div class="w-full rounded-lg shadow flex flex-col items-center">
          <img class="mt-5 w-48 object-contain" src="../../assets/logo.png">
          <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">

            <!-- TITLE -->
            <h1 class="text-xl font-bold leading-tight tracking-tight">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">

              <!-- EMAIL/PASSWORD INPUT -->
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">Your Email
                  <slot />
                </label>
                <input type="email" v-model="emailInputData" name="email" id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5"
                  placeholder="email@cesaedigital.com" required="">
              </div>

              <div>
                <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                <input type="password" v-model="passwordInputData" name="password" id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5"
                  placeholder="••••••••" required="">
              </div>

              <!-- FORGOT PASSWORD -->
              <div class="flex justify-end">
                <a href="#" class="text-sm font-medium hover:underline">Forgot password?</a>
              </div>

              <!-- SUBMIT FORM BUTTON -->
              <button @click="submitHandler" :disabled="isSubmitting" type="submit"
                class="w-full bg-purple text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                in</button>
            </form>
          </div>
        </div>
      </div>
      </LoginAnimation>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { AuthService } from '@/Services/AuthService.js';
import router from "@/router.js";
import ToastStore from '@/Stores/ToastStore.js';
import LoginAnimation from '@/layout/LoginAnimation.vue';


const emailInputData = ref(null);
const passwordInputData = ref(null);
const isSubmitting = ref(false);

const submitHandler = async (event) => {
  event.preventDefault();

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!emailInputData.value && !passwordInputData.value) {
    ToastStore().triggerToast(`Email e senha são obrigatórios!`, 'warning');
  } else {
    if (!emailRegex.test(emailInputData.value)) {
      ToastStore().triggerToast(`Email inválido!`, 'warning');
    }
    if (!passwordInputData.value) {
      ToastStore().triggerToast(`Senha é obrigatória!`, 'warning');
    }
  }

  isSubmitting.value = true;

  try {
    const authResult = await AuthService.login(emailInputData.value, passwordInputData.value);
    if (authResult.success) {
      router.push({ name: 'home' }).then();
      isSubmitting.value = false;
    }
  } finally {
    setTimeout(() => {
      isSubmitting.value = false;
    }, 500);

  }
}
</script>
