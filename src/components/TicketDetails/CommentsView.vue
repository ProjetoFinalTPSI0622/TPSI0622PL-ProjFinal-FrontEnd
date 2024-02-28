<script setup>
import {defineProps, defineEmits} from 'vue';
import { CommentsService } from '@/services/CommentsService';
import ToastStore from '@/Stores/ToastStore.js';

const emit = defineEmits(['refreshComments']);

const props = defineProps({
    comment: Object
})

const mydate = new Date(props.comment.created_at);

const deleteComment = async (id) => {
  await CommentsService.deleteComment(id);
  ToastStore().triggerToast('Comentario Eliminado!', 'success');
  emit('refreshComments');
}

</script> 

<template>
    <div class="pb-5 flex gap-4 max-w-[600px] text-wrap">
        <img loading="lazy" :src="comment.user.user_info.profile_picture_path"
            class="aspect-square object-cover object-center w-10 h-10 overflow-hidden shrink-0 rounded-[50%]" />
        <div class="text-lg flex flex-col gap-2 text-wrap">
            <p class="text-xl">
              {{ comment.user.name }} - <span class="text-sm text-gray-600">{{ mydate.toLocaleString() }}</span>
            </p>
            <p class="text-black text-wrap gap-3 bg-stone-200 rounded-lg p-3 text-opacity-65 flex flex-row justify-between">

              <div class="prose max-w-none " v-html="comment.comment_body"></div>

              <div v-if="comment.attachments && comment.attachments.length" class="mt-4">
                <span v-for="(attachment, index) in comment.attachments" :key="index" class="ml-2 inline-block">
                    <img :src="attachment.FilePath" class="max-w-xs rounded-lg" :alt="'Attachment ' + (index + 1)" />
                </span>
              </div>
              <div class="w-[10%] h-full flex justify-center">
                <button @click="deleteComment(comment.id)"><img src="@/assets/delete.svg"></button>
              </div>
            </p>
        </div>
    </div>
</template>