<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col w-full md:gap-5 justify-center gap-5">
      <UploadImage />
      <FormInfo />
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  import UploadImage from '../components/Settings/account/UploadImage.vue';
  import FormInfo from '../components/Settings/FormInfo.vue';
  export default {
    components: {
      OptionsBar,
      UploadImage,
      FormInfo
    }
}
</script>
