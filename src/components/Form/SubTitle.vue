<template>
    <h1 class="text-purple text-xl font-bold max-md:max-w-full">{{ SubTitle }}</h1>
</template>

<script>
export default {
    props: {
        SubTitle: {
            type: String,
            required: true
        }
    }
}
</script>
