<template>
      <div class="flex flex-col gap-2 w-full">
        <GroupTitle :title="title"/>
        <slot></slot>
    </div>
</template>

<script>
import GroupTitle from './GroupTitle.vue';
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
