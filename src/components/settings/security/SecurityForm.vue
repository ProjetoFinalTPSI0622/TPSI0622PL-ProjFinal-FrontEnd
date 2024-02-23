<template>
  <form @submit.prevent="changePassword" class="bg-grey rounded-md border-b-opacity-50 border-b lg:mx-10 xl:mx-0 p-8">

    <div class="flex flex-col w-full">
      <FormTitle Title="Alterar Password" class="ml-5" />
    </div>

    <div class="flex flex-col w-full my-5 md:items-center">
      <div class="flex flex-col gap-5 md:w-2/3 ">
        <Input LabelTitle="Password Atual" type="password" placeholder="Insert your current password" required
          v-model="currentPassword" />
        <Input LabelTitle="Nova Password" type="password" placeholder="Insert new password" required
          v-model="newPassword" />
        <Input LabelTitle="Confirmar Nova Password" type="password" placeholder="Confirm password" required
          v-model="newPassword_confirmation" />
      </div>
    </div>
    <ButtonSubmit textButton="Atualizar Informação" type="submit" />
  </form>
</template>

<script setup>
import FormTitle from '../../Form/FormTitle.vue';
import Input from '../../Form/Input.vue';
import ButtonSubmit from '../../Form/ButtonSubmit.vue';
import { UserService } from "../../../Services/UserService.js";
import { ref } from 'vue';


const currentPassword = ref('');
const newPassword = ref('');
const newPassword_confirmation = ref('');


const changePassword = async () => {
  console.log('changePassword');
  try {
    if (newPassword.value !== newPassword_confirmation.value) {
      console.error("New password and confirm password don't match");
      return;
    }
    console.log({
      currentPassword: currentPassword.value,
      newPassword: newPassword.value,
      newPassword_confirmation: newPassword_confirmation.value
    });
    const response = await UserService.changePassword({
      currentPassword: currentPassword.value,
      newPassword: newPassword.value,
      newPassword_confirmation: newPassword_confirmation.value
    });

    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

</script>
