<template>
        <div class="flex flex-col items-center md:items-start md:justify-center">
            <h2 class="text-primary text-xl">Upload New Photo</h2>
            <p class="text-primary text-opacity-50 text-base mt-2.5">{{ FileName }}</p>
        </div>
</template>

<script>
export default {
    props: {
        FileName: {
            type: String,
            required: true
        }
    }
}
</script>
