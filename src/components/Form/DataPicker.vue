<template>
  <div class="wrapper">
    <div class="flex grow basis-[0%] flex-col">
      <label class="text-black text-xs mb-2 pl-2">{{ LabelTitle }}</label>
      <flat-pickr
          class="form-control border border-solid border-purple py-1.5 rounded-lg text-center"
          v-model="selectedDate"
          :config="config"
          placeholder="Select a date"
          @on-change="handleChange"
          name="selectedDate"/>
    </div>
  </div>
</template>

<script setup>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { ref, onMounted, watch } from "vue";

const props = defineProps({
  LabelTitle: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String],
    default: null,
    required: true
  }
})

const config = ref({
  wrap: true,
  altFormat: 'd-m-Y',
  altInput: true,
  dateFormat: 'd-m-Y',
});

watch(() => props.modelValue, (newValue) => {
  selectedDate.value = newValue;
});

const selectedDate = ref(null);

const emit = defineEmits(['update:modelValue']);

const handleChange = (event) => {
  emit('update:modelValue', selectedDate.value);
};


</script>
