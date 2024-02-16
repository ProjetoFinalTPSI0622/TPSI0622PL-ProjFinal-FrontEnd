<script setup>
import { onBeforeMount, ref, nextTick, defineEmits } from 'vue';
import { CommentsService } from "@/Services/CommentsService.js";
import TiptapEditor from '@/components/TicketDetails/TiptapEditor.vue';

const emit = defineEmits(['refreshComments']);

const selectedCommentType = ref(1);
const commentTypes = ref(null);
const commentBody = ref('');
const attachedFiles = ref([]);

const props = defineProps({
    ticket: Object
});

const handleUpdateAttachedFiles = (newFiles) => {
    attachedFiles.value = newFiles;
};

onBeforeMount(async () => {
    await getCommentTypes();
});

const getCommentTypes = async () => {
    try {
        commentTypes.value = (await CommentsService.getCommentTypes()).data;
    } catch (error) {
        console.error('Error fetching comment types:', error);
    }
};

const updateSelectedComment = (e) => {
    selectedCommentType.value = e.target.value;
};

const postComment = async () => {
    const formData = new FormData();

    formData.append('comment_body', commentBody.value);
    formData.append('comment_type', selectedCommentType.value);
    formData.append('ticket_id', props.ticket.id);

    attachedFiles.value.forEach((fileObj, index) => {
        formData.append(`files[${index}]`, fileObj.file);
    });

    try {
        const response = (await CommentsService.createComment(formData));
    } catch (error) {
        console.error('Error posting comment:', error);
    }
    await nextTick(async () => {
        emit('refreshComments');
        commentBody.value = '';
        attachedFiles.value = [];
    });
};
</script>

<template>
    <div class="text-purple flex w-full flex-col p-3 gap-3 sm:text-2xl text-xl items-start">
        <div class="flex justify-between text-xl gap-2 w-full">
            <div class="flex">
                <img src="../../assets/corner-up-left.svg" />
                <select class="flex px-2" v-model="selectedCommentType" @change="updateSelectedComment">
                    <option v-for="commentType in commentTypes" :key="commentType.id" :value="commentType.id">
                        {{ commentType.name }}
                    </option>
                </select>
            </div>
            <button type="submit" @click.prevent="postComment"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg hoverBlue">
                Enviar comentário
            </button>
        </div>
        <form class="w-full border border-solid border-black border-opacity-20 rounded-lg bg-grey">
            <div class="px-4 py-2 bg-grey rounded-t-lg">
                <TiptapEditor v-model="commentBody" :attachedFiles="attachedFiles" @update:attachedFiles="handleUpdateAttachedFiles" />
            </div>
        </form>
    </div>
</template>