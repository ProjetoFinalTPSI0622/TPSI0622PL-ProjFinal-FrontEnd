<template>
  <div class="md:flex md:gap-5">
    <OptionsBar />
    <div class="flex flex-col w-full md:gap-5">
      <UploadImage />
      <FormInfo />
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../../components/settings/OptionsBar.vue';
  import UploadImage from '../../components/settings/UploadImage.vue';
  import FormInfo from '../../components/settings/FormInfo.vue';
  export default {
    components: {
      OptionsBar,
      UploadImage,
      FormInfo
    }
}
</script>

<style lang="scss" scoped>

</style>