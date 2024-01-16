<template>
    <div class="flex flex-col w-full gap-5 xl:items-center">
        <CreateUserForm class="xl:w-9/12"/>
    </div>
</template>

<script>
    import CreateUserForm from '../components/Users/CreateUserForm.vue';
    export default {
        components: {
            CreateUserForm
        }
    }
</script>
