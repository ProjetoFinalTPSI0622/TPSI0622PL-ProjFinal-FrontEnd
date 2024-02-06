<template>
  <div class="md:flex w-full">
    <SettingsBar />
    <div class="flex flex-col w-full md:mx-10 mb-10 ">
      <SecurityForm />
    </div>
  </div>
</template>
  
<script>
import SettingsBar from '../components/Settings/SettingsBar.vue';

import SecurityForm from '../components/settings/security/SecurityForm.vue';
export default {
  components: {
    SettingsBar,
    SecurityForm,
  }
}
</script>

