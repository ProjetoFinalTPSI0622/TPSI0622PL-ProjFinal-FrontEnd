<template>
    <div class="w-full">
        <div class="text-purple text-sm pl-2 md:pl-4 pr-4 xl:text-lg">{{ textDescription }}</div>
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