<template>
  <div class="md:flex w-full">
    <SettingsBar />
    <div class="flex flex-col h-fit w-full">
      <!-- <EditUserForm /> -->
    </div>
  </div>
</template>

<script>
  import SettingsBar from '@/components/Settings/SettingsBar.vue';
  // import EditUserForm from '../components/settings/Account/EditUserForm.vue';
  export default {
    components: {
    SettingsBar,
    // EditUserForm,
  }
}
</script>
