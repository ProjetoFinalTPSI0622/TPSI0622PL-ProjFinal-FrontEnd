<template>
  <div class="flex flex-col gap-5 w-full md:w-[40%] bg-grey p-10 md:px-5 border-b border-b-opacity-50 md:border-r md:border-r-opacity-50 md:border-t md:border-t-opacity-100">
       
       <router-link to="/Settings/Account" class="w-full"><OptionButton btnName="Account Settings" btnDescription="Details about your personal settings"/></router-link>
       <router-link to="/Settings/Notifications" class="w-full"><OptionButton btnName="Notifications" btnDescription="Details about your notifications system"/></router-link>
       <router-link to="/Settings/Security" class="w-full"><OptionButton btnName="Password & Security" btnDescription="Details about your password settings"/></router-link>


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

