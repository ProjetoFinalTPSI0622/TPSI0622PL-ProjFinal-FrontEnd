<template>
    <div class="flex flex-col gap-5 w-full">
        <NotificationShell>
            <NotificationGroup title="General Notifications">
                <Notification optionDescriptionText="Enable notification sound" />
                <Notification optionDescriptionText="Enable notifaction new message" />
                <Notification optionDescriptionText="Enable notification new update" />
                <Notification optionDescriptionText="Enable notification new ticket" />
            </NotificationGroup>
        </NotificationShell>
        <NotificationShell>
            <NotificationGroup title="Personal Notifications">
                <Notification optionDescriptionText="Disable all notifications" />
                <Notification optionDescriptionText="Disable notifications of tickets" />
            </NotificationGroup>
        </NotificationShell>
        <NotificationShell>
            <NotificationGroup title="Privite Notifications">
                <Notification optionDescriptionText="Enable notification sound" />
                <Notification optionDescriptionText="Enable notifaction new message" />
                <Notification optionDescriptionText="Enable notification new update" />
            </NotificationGroup>
        </NotificationShell>
    </div>
</template>

<script>
    import NotificationShell from '../../../layout/NotificationShell.vue';
    import NotificationGroup from '../notifications/NotificationGroup.vue';
    import Notification from '../notifications/Notification.vue';
    export default {
        components: {
            NotificationShell,
            NotificationGroup,
            Notification
        },
    }
</script>
