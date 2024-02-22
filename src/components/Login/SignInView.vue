<script setup>
import { ref, defineEmits } from 'vue'
import { AuthService } from '@/Services/AuthService.js';
import router from "@/router.js";
import ToastStore from '@/Stores/ToastStore.js';

const emailInputData = ref(null);
const passwordInputData = ref(null);
const isSubmitting = ref(false);

const emit = defineEmits(['forgot']);

const forgotPasswordHandler = () => {
    emit('forgot');
};
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

<template>
    <h1 class="text-xl font-bold leading-tight tracking-tight">
        Entre na sua conta
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">

        <!-- EMAIL/PASSWORD INPUT -->
        <div>
            <label for="email" class="block mb-2 text-sm font-medium">Email
                <slot />
            </label>
            <input type="email" v-model="emailInputData" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5"
                placeholder="email@cesaedigital.com" required="">
        </div>

        <div>
            <label for="password" class="block mb-2 text-sm font-medium">Palavra-passe</label>
            <input type="password" v-model="passwordInputData" name="password" id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5"
                placeholder="••••••••" required="">
        </div>

        <!-- FORGOT PASSWORD -->
        <div @click="forgotPasswordHandler" class="flex justify-end">
            <a href="#" class="text-sm font-medium hover:underline">Esqueceu-se da palavra-passe ?</a>
        </div>

        <!-- SUBMIT FORM BUTTON -->
        <button @click="submitHandler" :disabled="isSubmitting" type="submit"
            class="w-full bg-purple text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
    </form>
</template>