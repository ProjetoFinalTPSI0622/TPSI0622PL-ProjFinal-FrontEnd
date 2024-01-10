<template>
    <h1 class="text-purple text-3xl font-bold max-md:max-w-full"> {{ FormTitle }}</h1>
</template>

<script>
export default {
    props: {
        FormTitle: {
            type: String,
            required: true
        }
    }
}
</script>
