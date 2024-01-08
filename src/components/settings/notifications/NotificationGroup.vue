<template>
      <div class="flex flex-col gap-2 w-full">
        <GroupTitle :title="title"/>
        <slot></slot>
    </div>
</template>

<script>
import GroupTitle from './GroupTitle.vue';
import Notification from '../../../pages/Notification.vue';
export default {
    components: {
        GroupTitle,
        Notification
    },
    props: {
        title: {
            type: String,
            required: true
        },
    },
}
</script>
