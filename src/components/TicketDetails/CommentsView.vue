<script setup>

import {defineProps, onBeforeMount, onMounted} from 'vue';

const props = defineProps({
    comment: Object
})

</script>

<template>
    <div class="flex gap-4">
<!--        <img loading="lazy" src="{{ comment.user.userInfo.profile_picture_path }}"
            class="aspect-square object-cover object-center w-12 h-12 overflow-hidden shrink-0 rounded-[50%]" />-->
        <div class="text-lg flex flex-col gap-2 text-wrap">
            <p class="text-xl">
              {{ comment.user.name }}
            </p>
            <p class="text-black text-opacity-65">
              {{ comment.comment_body }}
            </p>
        </div>
    </div>
</template>