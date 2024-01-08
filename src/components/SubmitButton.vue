<template>
    <button class="bg-purple text-white font-bold text-lg md:w-full px-9 py-3 rounded-md max-md:mb-5 max-md:px-5 grow">
        {{ btnLabel }}
    </button>
</template>

<script>
export default {
    props: {
        btnLabel: {
            type: String,
            required: true
        }
    }
}
</script>

