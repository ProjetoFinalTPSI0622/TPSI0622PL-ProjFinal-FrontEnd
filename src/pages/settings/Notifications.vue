<template>
    <div class="md:flex md:gap-5">
        <OptionsBar/>
        <div class="flex flex-col w-full gap-5 p-3">
            <div class="flex flex-col gap-5 w-full">
                <NotificationShell>
                    <NotificationGroup title="General Notifications">
                        <Notification optionDescriptionText="Enable notification sound"/>
                        <Notification optionDescriptionText="Enable notifaction new message"/>
                        <Notification optionDescriptionText="Enable notification new update"/>
                        <Notification optionDescriptionText="Enable notification new ticket"/>
                    </NotificationGroup>
                </NotificationShell>
                <NotificationShell>
                    <NotificationGroup title="Personal Notifications">
                        <Notification optionDescriptionText="Disable all notifications"/>
                        <Notification optionDescriptionText="Disable notifications of tickets"/>
                    </NotificationGroup>
                </NotificationShell>
                <NotificationShell>
                    <NotificationGroup title="Privite Notifications">
                        <Notification optionDescriptionText="Enable notification sound"/>
                        <Notification optionDescriptionText="Enable notifaction new message"/>
                        <Notification optionDescriptionText="Enable notification new update"/>
                    </NotificationGroup>
                </NotificationShell>
            </div>
        </div>
    </div>
</template>

<script>
import OptionsBar from '../../components/settings/OptionsBar.vue';
import FilterType from '../../components/Settings/notifications/FilterType.vue';
import NotificationGroup from '../../components/Settings/notifications/NotificationGroup.vue';
import Notification from '../../components/Settings/notifications/Notification.vue';
import NotificationShell from '../../layout/NotificationShell.vue';
export default {
    components: {
        OptionsBar,
        FilterType,
        NotificationGroup,
        Notification,
        NotificationShell
    },

}
</script>

