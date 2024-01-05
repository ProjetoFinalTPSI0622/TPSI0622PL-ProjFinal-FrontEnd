<template>
    <div>
        <div class="flex flex-row w-full">
            <div class="text-purple text-base font-bold my-auto w-full pl-1 pb-2 border-b-2 border-purple">{{ title }}</div>
            <!-- <CheckBox /> -->
        </div>
    </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
export default {
    components: {
        CheckBox
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
}
</script>
