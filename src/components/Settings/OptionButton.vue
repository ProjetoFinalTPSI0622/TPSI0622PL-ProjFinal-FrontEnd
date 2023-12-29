<template>
  <button v-for="option in options"
    class="flex flex-col items-center shadow-sm bg-white py-2.5 rounded-md md:items-start">
    <div class="flex flex-col px-5 md:items-start">
      <h1 class="text-primary text-2xl whitespace-nowrap">{{ option.name }}</h1>
      <h3 class="text-primary text-sm whitespace-nowrap mt-2.5">{{ option.description }}</h3>
    </div>
  </button>
</template>

<script>
export default {
  name: 'OptionsBar',
  data() {
    return {
      options: [
        {
          name: 'Account Settings',
          description: 'Details about your personal settings'
        },
        {
          name: 'Notifications',
          description: 'Details about your notifications system'
        },
        {
          name: 'Password & Security',
          description: 'Details about your password settings'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped></style>