<template>
    <button type="submit"
        class="text-white text-center text-xl mx-10 md:mx-0 font-bold whitespace-nowrap justify-center items-center bg-purple mt-8 mb-4 px-16 py-3 rounded-md max-md:max-w-full max-md:px-5">
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
