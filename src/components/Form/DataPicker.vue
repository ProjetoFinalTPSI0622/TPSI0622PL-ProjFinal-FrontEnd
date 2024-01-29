<template>
    <div class="wrapper">
        <div class=" flex grow basis-[0%] flex-col">
            <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
            <flat-pickr :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-control border border-solid border-purple py-1.5 rounded-lg text-center"/>
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
    },
    data() {
        return {
            selectedDate: null
        };
    }
};
</script>