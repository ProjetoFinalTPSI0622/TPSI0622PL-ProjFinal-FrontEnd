<template>
    <div class="md:flex w-full">
        <SettingsBar/>
        <div class="flex flex-col w-full p-5 md:pr-8 lg:p-10 lg:mr-8 xl:mr-16">
            <NotificationForm />
        </div>
    </div>
</template>

<script>
import SettingsBar from '@/components/Settings/SettingsBar.vue';
import FilterType from '@/components/settings/notifications/FilterType.vue';
import NotificationForm from '@/components/settings/notifications/NotificationForm.vue';
export default {
    components: {
        SettingsBar,
        FilterType,
        NotificationForm,
    },

}
</script>

