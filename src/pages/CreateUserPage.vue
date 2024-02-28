<template>
    <div class="flex flex-col w-full xl:items-center">
        <CreateUserForm/>
    </div>
</template>

<script>
    import CreateUserForm from '@/components/Users/CreateUserForm.vue';
    export default {
        components: {
            CreateUserForm
        }
    }
</script>
