<template>
  <div class="md:flex w-full">
    <SettingsBar />
    <div class="flex flex-col h-fit w-full md:mr-10 items-end">
      <ShowUserForm :myuser="currentUser" />
    </div>
  </div>
</template>

<script>
import SettingsBar from '../components/Settings/SettingsBar.vue';
import ShowUserForm from '../components/Users/ShowUserForm.vue';
export default {
  components: {
    SettingsBar,
    ShowUserForm,
  },
  data() {
    return {
      currentUser: null,
      async created() {
        try {
          const response = await UserService.getAuthedUser();
          this.currentUser = response.data;
        } catch (error) {
          console.error('Erro ao obter usuário autenticado:', error);
        }
      },
    }
  }
}
</script>
