<template>
    <div class="md:flex w-full">
      <OptionsBar />
      <div class="flex flex-col h-fit w-full">
            <SecurityForm />
      </div>
    </div>
  </template>
  
  <script>
    import OptionsBar from '../components/Settings/OptionsBar.vue';
    import SecurityForm from '../components/settings/security/SecurityForm.vue';
    export default {
      components: {
    OptionsBar,
    SecurityForm,
}
  }
  </script>
