<template>
  <div class="flex flex-col gap-5 w-full bg-grey max-w-[480px] p-12 border-r-opacity-50 border-r border-t border-t-opacity-100">
    <OptionButton />
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

<style lang="scss" scoped></style>