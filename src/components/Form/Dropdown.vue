<template>
  <div class="flex grow basis-[0%] flex-col">
    <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
    <select
        @change="handleChange"
        v-model="selectedOption"
        class="bg-white text-purple text-base text-wrap border border-solid border-purple pl-2.5 py-1.5 rounded-lg">
      <option value="" disabled selected>Select the {{ LabelTitle }}</option>
      <option v-for="option in props.options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup >
import { onMounted, ref, watch, } from "vue";

const props = defineProps({
  LabelTitle: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
});

const selectedOption = ref(null);
const emit = defineEmits(['update:modelValue']);

watch(() => props.modelValue, (newValue) => {
  selectedOption.value = newValue;
});

const handleChange = (event) => {
  selectedOption.value = event.target.value;
  emit('update:modelValue', selectedOption.value);
};
</script>