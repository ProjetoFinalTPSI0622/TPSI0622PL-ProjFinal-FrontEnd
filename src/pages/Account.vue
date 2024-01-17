<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col h-fit w-full">
      <EditUserForm />
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  import EditUserForm from '../components/settings/Account/EditUserForm.vue';
  export default {
    components: {
    OptionsBar,
    EditUserForm,
  }
}
</script>
