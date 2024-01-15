<template>
    <button type="submit"
        class="text-white text-center text-lg w-full font-bold justify-center items-center bg-purple py-3 rounded-md ">
        {{ textButton }}
    </button>
</template>

<script>
export default {
    props: {
        textButton: {
            type: String,
            required: true
        }
    }
}
</script>
