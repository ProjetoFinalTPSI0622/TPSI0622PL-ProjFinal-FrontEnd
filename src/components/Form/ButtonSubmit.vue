<template>
    <div class="flex justify-center">
        <div class="flex items-end w-full xl:w-5/12">
            <button 
            type="type"
            class="inline-block text-white text-center rounded-xl px-6 py-2.5 text-xs font-medium uppercase w-full justify-center items-center bg-purple">
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
