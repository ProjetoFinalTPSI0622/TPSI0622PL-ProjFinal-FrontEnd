<template>
    <div class="flex flex-row w-full my-1">
        <OptionDescription :textDescription="optionDescriptionText" />
        <CheckBox />
    </div>
</template>

<script>
import CheckBox from '../../Settings/notifications/CheckBox.vue';
import OptionDescription from '../../Settings/notifications/OptionDescription.vue';
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

