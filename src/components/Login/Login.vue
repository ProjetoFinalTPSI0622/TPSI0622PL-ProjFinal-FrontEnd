<script setup>
import {onBeforeMount, ref} from 'vue'
import { AuthService } from '../../Services/AuthService.js';
import router from "../../router.js";

const emailInputData = ref(null);
const passwordInputData = ref(null);

const submitHandler = async (e) => {
  e.preventDefault();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!emailRegex.test(emailInputData.value)) {
    alert('Email inválido')
    return
  }

  const authResult = await AuthService.login(emailInputData.value, passwordInputData.value);

  if(authResult.success){
    router.push({name: 'home'}).then();
  }

}

</script>

<template>
  <div class="h-screen w-screen ">
    <section>
      <div class="flex flex-col items-center md:justify-center px-6 py-20 mx-auto h-screen lg:py-0 md:max-w-screen-md  ">


<!--        IMAGE-->
        <div class="w-full rounded-lg shadow flex flex-col items-center">
          <img class="mt-10 w-48 mr-2 object-contain" src="../../assets/logo.png" >
          <div class="w-full p-6 space-y-4 md:space-y-6 sm:p-8">

<!--            TITLE-->
            <h1 class="text-xl font-bold leading-tight tracking-tight">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">

<!--              EMAIL/PASSWORD INPUT-->
              <div>
                <label for="email" class="block mb-2 text-sm font-medium">Your Email<slot /></label>
                <input type="email" v-model="emailInputData" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5" placeholder="email@cesaedigital.com" required="">
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                <input type="password" v-model="passwordInputData" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5" placeholder="••••••••" required="">
              </div>

<!--              REMEMBER/FORGOT PASSWORD-->
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required="">
                  </div>

<!--                  REMEMBER ME-->
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500">Remember me</label>
                  </div>

<!--                  FORGOT PASSWORD-->
                </div>
                <a href="#" class="text-sm font-medium hover:underline">Forgot password?</a>
              </div>

<!--              SUBMIT FORM BUTTON-->
              <button @click="submitHandler" type="submit" class="w-full bg-purple text-white focus:ring-4 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped>



</style>