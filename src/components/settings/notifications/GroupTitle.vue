<template>
    <div>
        <div class="flex flex-row w-full pr-3">
            <div class="text-purple text-base font-bold my-auto w-full">
                General Notifications
            </div>
            <!-- <CheckBox /> -->
        </div>
    </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
export default {
    name: 'Title',
    components: {
        CheckBox
    }
}
</script>
