<template>
    <div class="md:flex w-full h-fit">
        <SettingsBar/>
        <div class="flex flex-col w-full m-10">
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