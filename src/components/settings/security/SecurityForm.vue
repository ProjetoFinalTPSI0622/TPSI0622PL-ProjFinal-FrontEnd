<template v-slot:Form>
  <FormShell @submit="changePassword">
    <template v-slot:FormTitle>
      <div class="flex flex-col w-full">
        <FormTitle FormTitle="Change Password" />
      </div>
    </template>
    <template v-slot:Form>
      <div class="flex flex-col w-full my-5">
        <div class="flex flex-col gap-5 ">
          <Input LabelTitle="Current Password" type="password" placeholder="Insert your current password" required v-model="currentPassword" />
          <Input LabelTitle="New Password" type="password" placeholder="Insert new password" required v-model="newPassword" />
          <Input LabelTitle="Confirm Password" type="password" placeholder="Confirm password" required v-model="newPassword_confirmation" />
        </div>
      </div>


    </template>
    <template v-slot:ButtonSubmit>
      <div class="flex justify-center mx-10">
<!--        TODO: FIX THIS BUTTON COMPONENT-->
        <ButtonSubmit textButton="Update Information" />

      </div>
    </template>
  </FormShell>
</template>

<script setup>
import FormShell from '../../../layout/FormShell.vue';
import FormTitle from '../../Form/FormTitle.vue';
import Input from '../../Form/Input.vue';
import ButtonSubmit from '../../Form/ButtonSubmit.vue';
import { UserService } from "../../../Services/UserService.js";
import { ref } from 'vue';


const currentPassword = ref('');
  const newPassword = ref('');
  const newPassword_confirmation = ref('');


  const changePassword = async () => {
    try {
      if (newPassword.value !== newPassword_confirmation.value) {
        console.error("New password and confirm password don't match");
        return;
      }

      console.log({
        currentPassword: currentPassword.value,
        newPassword: newPassword.value,
        newPassword_confirmation: newPassword_confirmation.value
      })
      const response = await UserService.changePassword( {
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
