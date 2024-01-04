<template>
    <div class="md:flex md:gap-5">
        <OptionsBar />
        <div class="flex flex-col w-full md:gap-5">
            <NotificationType />
            <!-- <NotificationSection /> -->
        </div>
    </div>
</template>

<script>
import OptionsBar from '../../components/settings/OptionsBar.vue';
import NotificationType from '../../components/Settings/notifications/NotificationType.vue';
import NotificationSection from '../../components/Settings/notifications/NotificationSection.vue';
export default {
    components: {
        OptionsBar,
        NotificationType,
        NotificationSection
    }
}
</script>

