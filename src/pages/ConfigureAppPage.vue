<template>
    <div class="md:flex w-full">
        <SettingsBar/>
        <div class="flex flex-col w-full p-5 lg:p-10 ">
            <ConfigureApp/>
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