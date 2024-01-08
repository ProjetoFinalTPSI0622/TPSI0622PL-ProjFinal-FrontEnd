<template>
    <div class="flex flex-row w-full my-1">
        <OptionDescription :textDescription="optionDescriptionText" />
        <CheckBox />
    </div>
</template>

<script>
import CheckBox from '../components/Settings/notifications/CheckBox.vue';
import OptionDescription from '../components/Settings/notifications/OptionDescription.vue';
export default {
    components: {
        CheckBox,
        OptionDescription
    },
    props: {
        optionDescriptionText: {
            type: String,
            required: true
        }
    },
}
</script>

