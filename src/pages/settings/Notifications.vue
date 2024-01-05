<template>
    <div class="md:flex md:gap-5">
        <OptionsBar />
        <div class="flex flex-col w-full gap-5 p-3">
            <FilterType/>
            <div class="flex flex-col gap-8 w-full">
                <NotificationGroup />
            </div>
        </div>
    </div>
</template>

<script>
import OptionsBar from '../../components/settings/OptionsBar.vue';
import FilterType from '../../components/Settings/notifications/FilterType.vue';
import NotificationGroup from '../../components/Settings/notifications/NotificationGroup.vue';
export default {
    components: {
        OptionsBar,
        FilterType,
        NotificationGroup
    }
}
</script>

