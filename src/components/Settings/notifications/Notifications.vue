<template>
    <div class="md:flex w-full">
        <OptionsBar/>
        <div class="flex flex-col w-full p-5 md:pr-8 lg:p-10 lg:mr-8 xl:mr-16">
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
import OptionsBar from '../OptionsBar.vue';
import FilterType from './FilterType.vue';
import NotificationGroup from './NotificationGroup.vue';
import Notification from '../../../pages/Notification.vue';
import NotificationShell from '../../../layout/NotificationShell.vue';
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

