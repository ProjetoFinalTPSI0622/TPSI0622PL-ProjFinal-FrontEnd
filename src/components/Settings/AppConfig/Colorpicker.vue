<template>
  <div class="flex justify-center space-x-2 items-end max-w-fit">
    <input 
      v-model="color" 
      id="nativeColorPicker1" 
      type="color"  
      class="align-items-center justify-center w-8 h-8"
      @input="changeColor" />
  </div>
</template>
  
<script setup>
import { ref, defineEmits } from 'vue';

const color = ref("#25183E");
const emit = defineEmits();

const changeColor = () => {
  emit("updateColor", color.value);
};
</script>

















<!-- <script >
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
      // loadData();
    };

    return { color, changeColor, createStatus };
  },
};

</script> -->