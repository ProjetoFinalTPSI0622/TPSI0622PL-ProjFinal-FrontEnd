<template>
  <button class="flex flex-col w-full items-center shadow-sm bg-white py-2.5 rounded-md md:items-start ">
    <div class="flex flex-col px-5 md:items-start md:pl-3 md:pr-0">
      <h1 class="text-primary text-lg bold lg:text-xl ">{{ btnName }}</h1>
      <h3 class="text-primary text-xs mt-2 md:text-start xl:text-sm">{{ btnDescription }}</h3>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      required: true
    },
    btnDescription: {
      type: String,
      required: true
    }
  },
}
</script>

