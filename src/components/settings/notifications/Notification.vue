<template>
    <div class="flex flex-row w-full pr-3">
        <OptionText />
        <CheckBox />
    </div>
</template>

<script>
import OptionText from './OptionText.vue';
import CheckBox from './CheckBox.vue';
export default {
    components: {
        OptionText,
        CheckBox
    }
}
</script>

