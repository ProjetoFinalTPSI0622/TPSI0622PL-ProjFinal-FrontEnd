<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col justify-center h-fit md:w-[70%]">
      <ImageCard />
      <Form/>
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  import ImageCard from '../components/Settings/account/ImageCard.vue';
  import Form from '../components/Form.vue';
  export default {
    components: {
      OptionsBar,
      ImageCard,
      Form
    }
}
</script>
