<template>
    <div class="flex justify-center space-x-2 items-end max-w-fit">
      <input v-model="color" id="nativeColorPicker1" type="color" value="#25183E" class="align-items-center justify-center w-8 h-8" />
      <button
        type="submit"
        class="inline-block rounded-xl px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md"
        :style="{ backgroundColor: color }"
        @click="changeColor">
        {{ buttonText ? buttonText : "Guardar"}}
      </button>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import {StatusesService} from '@/Services/StatusesService';

export default {
  props: {
    buttonText: String,
    color: String
  },
  setup(props, context) {
    const color = ref("#25183E");

    const changeColor = () => {
        context.emit("update:buttonText", color.value);
        createStatus(); 
    };

    const createStatus = () => {
      StatusesService.createStatus({ name: props.buttonText, color: color.value })
    };

    return { color, changeColor, createStatus };
  },
};

</script>