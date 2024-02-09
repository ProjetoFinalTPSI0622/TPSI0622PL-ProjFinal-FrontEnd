<script setup>

import {defineProps} from 'vue';

const props = defineProps({
    comment: Object
})

const mydate = new Date(props.comment.created_at);

</script>

<template>
    <div class="pb-5 flex gap-4">
        <img loading="lazy" :src="comment.user.user_info.profile_picture_path"
            class="aspect-square object-cover object-center w-10 h-10 overflow-hidden shrink-0 rounded-[50%]" />
        <div class="text-lg flex flex-col gap-2 text-wrap">
            <p class="text-xl">
              {{ comment.user.name }} - <span class="text-sm text-gray-600">{{ mydate.toLocaleString() }}</span>
            </p>
            <p class="text-black bg-stone-200 rounded-lg p-3 text-opacity-65">
              {{ comment.comment_body }}

              <div v-if="comment.attachments && comment.attachments.length" class="mt-4">
                <span v-for="(attachment, index) in comment.attachments" :key="index" class="ml-2 inline-block">
                    <img :src="attachment.FilePath" class="max-w-xs rounded-lg" :alt="'Attachment ' + (index + 1)" />
                </span>
              </div>

            </p>
        </div>
    </div>
</template>