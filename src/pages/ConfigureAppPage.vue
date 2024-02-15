<template>
    <div class="md:flex w-full h-full">
        <SettingsBar />
        <div class="flex flex-col w-[75%] p-8">
            <div class="overflow-y-auto">
                <ConfigureApp />
            </div>
        </div>
    </div>
</template>

<script>
import SettingsBar from '../components/Settings/SettingsBar.vue';
import ConfigureApp from '../components/Settings/AppConfig/ConfigureApp.vue';
export default {
    components: {
        SettingsBar,
        ConfigureApp
    },
}
</script>