<template>
  <div class="flex flex-col gap-5 w-full items-stretch md:w-[40%] bg-grey p-10 md:px-5 border-b border-b-opacity-50 md:border-r md:border-r-opacity-50 md:border-t md:border-t-opacity-100">
    <router-link to="/Settings/Account" class="w-full">
      <OptionButton btnName="Configurações de Conta" btnDescription="Detalhes sobre suas configurações pessoais" />
    </router-link>
    <router-link to="/Settings/Security" class="w-full">
      <OptionButton btnName="Password & Segurança" btnDescription="Detalhes sobre a password" />
    </router-link>
   </div>
</template>

<script>
import OptionButton from './OptionButton.vue';
export default {
  components: {
    OptionButton,
  }
}
</script>

