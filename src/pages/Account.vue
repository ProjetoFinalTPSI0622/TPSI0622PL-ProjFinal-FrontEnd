<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col h-fit w-full">
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  export default {
    components: {
    OptionsBar,
  }
}
</script>
