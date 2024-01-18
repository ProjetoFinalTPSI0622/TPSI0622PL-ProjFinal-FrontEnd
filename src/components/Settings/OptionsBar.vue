<template>
  <div class="flex flex-col gap-5 w-full md:w-[40%] bg-grey p-10 md:px-5 border-b border-b-opacity-50 md:border-r md:border-r-opacity-50 md:border-t md:border-t-opacity-100">
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

