<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['back']);

const backHandler = () => {
    emit('back');
}
</script>

<template>
    <h1 class="text-xl font-bold leading-tight tracking-tight">
        Recuperar palavra-passe
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">

        <!-- EMAIL/PASSWORD INPUT -->
        <div>
            <label for="email" class="block mb-2 text-sm font-medium">Email de recuperação
                <slot />
            </label>
            <input type="email" v-model="emailInputData" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5"
                placeholder="email@cesaedigital.com" required="">
        </div>

        <div @click="backHandler" class="flex justify-end">
            <a href="#" class="text-sm font-medium hover:underline">Voltar</a>
        </div>

        <!-- SUBMIT FORM BUTTON -->
        <button @click="submitHandler" :disabled="isSubmitting" type="submit"
            class="w-full bg-purple text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confirmar</button>
    </form>
</template>