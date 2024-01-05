<template>
    <div class="w-full">
        <div class="text-purple text-sm pl-2 pr-4">{{ textDescription }}</div>
    </div>
</template>

<script>
export default {
    props: {
        textDescription: {
            type: String,
            required: true
        }
    },
}
</script>