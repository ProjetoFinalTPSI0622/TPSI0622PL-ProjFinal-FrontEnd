<template>
    <div class=" flex flex-col gap-2 w-full">
        <GroupTitle />
        <Notification />
        <Notification />
        <Notification />
    </div>
</template>

<script>
import GroupTitle from './GroupTitle.vue';
import Notification from './Notification.vue';
    export default {
    components: {
        GroupTitle, 
        Notification
    }
}
</script>
