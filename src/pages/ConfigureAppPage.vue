<template>
    <div class="md:flex w-full h-full">
        <div class="flex flex-col w-full p-8">
            <FormTitle Title="Configurações da APP" class="text-blue mb-5"/>
            <div class="overflow-y-auto">
                <ConfigureApp />
            </div>
        </div>
    </div>
</template>

<script setup>
import ConfigureApp from '../components/Settings/AppConfig/ConfigureApp.vue';
import FormTitle from '../components/Form/FormTitle.vue';
</script>