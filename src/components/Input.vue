<template>
    <div class=" flex grow basis-[0%] flex-col">
        <label class="text-pink text-sm">{{ LabelTitle }}*</label>
        <input class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
    </div>
</template>

<script>
export default {
    props: {
        LabelTitle: {
            type: String,
            required: true
        }
    },
}
</script>
