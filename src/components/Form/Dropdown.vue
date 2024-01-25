<template>
    <div class=" flex grow basis-[0%] flex-col">
        <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
        <select class=" bg-white text-purple text-base text-wrap border border-solid border-purple px-2.5 py-1.5 rounded-lg">
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>
  
<script>
export default {
    props: {
        LabelTitle: {
            type: String,
            required: true
        },
        options: Array,
        selectedOption: String
    }
};
</script>
  
  