<template>
  <div class="md:flex w-full">
    <SettingsBar />
    <div class="flex flex-col w-full md:m-10">
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

