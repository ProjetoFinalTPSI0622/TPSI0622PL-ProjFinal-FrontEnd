<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col w-full justify-center">
      <UploadImageCard />
      <Form/>
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  import UploadImageCard from '../components/Settings/account/UploadImageCard.vue';
  import Form from '../components/Form.vue';
  export default {
    components: {
      OptionsBar,
      UploadImageCard,
      Form
    }
}
</script>
