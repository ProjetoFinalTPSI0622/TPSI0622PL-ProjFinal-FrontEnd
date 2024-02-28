<template>
    <h1 class="text-purple text-2xl font-bold max-md:max-w-full">{{ Title }}</h1>
</template>

<script>
export default {
    props: {
        Title: {
            type: String,
            required: true
        }
    }
}
</script>
