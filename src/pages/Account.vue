<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col w-full md:gap-5 justify-center gap-5">
      <UploadImageCard />
      <FormInfo />
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  import UploadImageCard from '../components/Settings/account/UploadImageCard.vue';
  import FormInfo from '../components/Settings/FormInfo.vue';
  export default {
    components: {
      OptionsBar,
      UploadImageCard,
      FormInfo
    }
}
</script>
