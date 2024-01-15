<template>
    <div class="w-full">
        <ImageCard />
        <CreateUserForm />
    </div>
</template>

<script>
    import ImageCard from '../components/settings/account/ImageCard.vue';
    import CreateUserForm from '../components/Users/CreateUserForm.vue';
    export default {
        components: {
            ImageCard,	
            CreateUserForm
        }
    }
</script>
