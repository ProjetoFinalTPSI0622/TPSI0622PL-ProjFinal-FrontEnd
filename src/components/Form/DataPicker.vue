<template>
    <div class="wrapper">
        <div class=" flex grow basis-[0%] flex-col">
            <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
            <flat-pickr v-model="selectedDate" class="form-control border border-solid border-purple rounded-lg h-8 text-center"></flat-pickr>
        </div>
    </div>
</template>
  
<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    components: {
        flatPickr
    },
    props: {
        LabelTitle: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            default: null,
            required: true
        }
    },
    data() {
        return {
            selectedDate: this.modelValue
        };
    },
    watch: {
        selectedDate(newValue) {
            this.$emit('update:modelValue', newValue);
        },
        modelValue(newValue) {
            this.selectedDate = newValue;
        }
    }
};
</script>