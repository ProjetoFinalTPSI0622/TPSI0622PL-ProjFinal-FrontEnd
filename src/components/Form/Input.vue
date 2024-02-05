<template>
    <div class=" flex grow basis-[0%] flex-col">
        <label class="text-pink text-xs mb-2 pl-2">{{ LabelTitle }}*</label>
        <input 
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :type="type"
        class="bg-white text-purple text-base text-wrap border border-solid border-purple pl-2.5 py-1.5 rounded-lg">
    </div>
</template>

<script>
export default {
    props: {
        LabelTitle: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },

    },
}
</script>
