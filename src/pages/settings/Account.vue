<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col w-full md:gap-5 justify-center">
      <UploadImage />
      <FormInfo />
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../../components/settings/OptionsBar.vue';
  import UploadImage from '../../components/settings/account/UploadImage.vue';
  import FormInfo from '../../components/settings/FormInfo.vue';
  export default {
    components: {
      OptionsBar,
      UploadImage,
      FormInfo
    }
}
</script>
