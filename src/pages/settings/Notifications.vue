<template>
    <div class="md:flex md:gap-5">
        <OptionsBar />
        <div class="flex flex-col w-full md:gap-5 p-3">
            <!-- <NotificationType /> -->
            <div class="flex gap-2">
                <Option />
                <CheckBox />
            </div>
            <div class="flex gap-2">
                <Option />
                <CheckBox />
            </div>
        </div>
    </div>
</template>

<script>
import OptionsBar from '../../components/settings/OptionsBar.vue';
import NotificationType from '../../components/Settings/notifications/NotificationType.vue';
import Option from '../../components/Settings/notifications/Option.vue';
import CheckBox from '../../components/Settings/notifications/CheckBox.vue';
export default {
    components: {
        OptionsBar,
        NotificationType,
        Option,
        CheckBox
    }
}
</script>

