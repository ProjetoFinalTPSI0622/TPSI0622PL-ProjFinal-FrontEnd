<template>
    <div class="w-full" v-for="option in options" :key="option.description">
        <div class="text-purple text-sm pl-2">{{ option.description }}</div>
    </div>
</template>

<script>
export default {
    name: 'Option',
    data() {
        return {
            options: [
                {
                    description: 'There is a new conversation'
                },
            ]
        }
    },
}
</script>
