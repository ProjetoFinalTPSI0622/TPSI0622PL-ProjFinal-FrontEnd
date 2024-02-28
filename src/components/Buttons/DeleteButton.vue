<template>
    <div class="flex justify-center">
        <div class="flex items-end w-full">
            <button type="type" class="bg-red-400 text-sm text-black rounded-lg px-2.5 py-1.5">{{ textButton }}</button>
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