<template>
    <div>
        <Option />
        <Option />
        <CheckBox />
    </div>
    <div>
        <Option />
        <Option />
        <CheckBox />
    </div>
</template>

<script>
import Option from './Option.vue';
import CheckBox from './CheckBox.vue';
    export default {
    components: { 
        Option,
        CheckBox 
    }
}
</script>
