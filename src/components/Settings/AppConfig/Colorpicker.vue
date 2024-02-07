<template>
    <div class="flex justify-center space-x-2 items-end max-w-fit">
      <input v-model="color" id="nativeColorPicker1" type="color" value="#25183E" class="align-items-center justify-center w-8 h-8" />
      <button
        type="button"
        class="inline-block rounded-xl bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        :style="{ backgroundColor: color }"
        @click="changeColor"
      >
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        color: "#25183E",
      };
    },
    props: {
      buttonText: String,
    },
    methods: {
      changeColor() {
        this.$emit("update:buttonText", this.color);
      },
    },
  };
  </script>