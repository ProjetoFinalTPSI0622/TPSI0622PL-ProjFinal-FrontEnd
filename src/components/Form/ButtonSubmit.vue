<template>
    <div class="flex justify-center">
        <div class="flex items-center w-full xl:w-5/12">
            <button 
            type="type"
            class="text-white text-center text-base w-full font-bold justify-center items-center bg-purple py-3 rounded-md">
            {{ textButton }}
        </button>

    </div>
</div>
</template>

<script>
export default {
    props: {
        textButton: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }
}
</script>
