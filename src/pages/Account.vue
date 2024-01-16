<template>
  <div class="md:flex w-full">
    <OptionsBar />
    <div class="flex flex-col h-fit w-full">
      <ImageCard />
      <ShowAccount/>
    </div>
  </div>
</template>

<script>
  import OptionsBar from '../components/Settings/OptionsBar.vue';
  import ImageCard from '../components/Form/AvatarCard.vue';
  import ShowAccount from '../components/settings/account/ShowAccount.vue';
  export default {
    components: {
    OptionsBar,
    ImageCard,
    ShowAccount,
  }
}
</script>
