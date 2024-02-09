<script setup>
import { onBeforeMount, ref, nextTick, defineEmits } from 'vue';
import { CommentsService } from "@/Services/CommentsService.js";

const emit = defineEmits(['refreshComments']);

const selectedCommentType = ref(1);
const commentTypes = ref(null);
const commentBody = ref('');
const attachedFiles = ref([]);
const fileInputRef = ref(null);

const triggerFileInput = () => {
    fileInputRef.value.click();
};

const handleFileChange = (event) => {
    for (const file of event.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            attachedFiles.value.push({ src: e.target.result, file });
        };
        reader.readAsDataURL(file);
    }
};

const removeAttachedFile = (index) => {
    attachedFiles.value.splice(index, 1);
};

const props = defineProps({
    ticket: Object
});

onBeforeMount(async () => {
    await getCommentTypes();
});

const getCommentTypes = async () => {
    try {
        commentTypes.value = (await CommentsService.getCommentTypes()).data;
    } catch (error) {
        //TODO: DAR DISPLAY DA ERROR MESSAGE NUM TOAST OR SMT
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

    console.log('formData:', formData.values);

    try {
        const response = (await CommentsService.createComment(formData));
        console.log(response);
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
    <div
        class="text-purple flex flex-col gap-4 sm:text-2xl text-xl h-[30vh] whitespace-nowrap justify-between p-3 items-start">

        <div class="flex text-xl gap-2">
            <div class="flex">
                <img src="../../assets/corner-up-left.svg" />
                <select class="flex px-2" v-model="selectedCommentType" @change="updateSelectedComment">
                    <option v-for="commentType in commentTypes" :key="commentType.id" :value="commentType.id">
                        {{ commentType.name }}
                    </option>
                </select>
            </div>

        </div>

        <form class="w-full">
            <div class="w-full border border-solid border-black border-opacity-20 rounded-lg bg-grey">
                <div class="px-4 py-2 bg-grey rounded-t-lg">
                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea id="comment" rows="4" v-model="commentBody" @input="testeInput"
                        class="w-full px-0 text-base text-gray-900 bg-grey focus:outline-none focus-visible:outline-none"
                        placeholder="Escreva o seu comentário..." required></textarea>
                </div>
                <div class="flex items-center justify-between px-3 py-2 border-t">
                    <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                        <button type="button"
                            class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                            <img src="../../assets/text.svg" />
                        </button>
                        <button type="button"
                            class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                            <img src="../../assets/emoji.svg" />
                        </button>

                        <input type="file" @change="handleFileChange" multiple class="hidden" ref="fileInputRef">
                        <button type="button" @click="triggerFileInput"
                            class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                            <img src="../../assets/attach.svg" />
                        </button>

                        <div v-if="attachedFiles.length" class="flex gap-3">
                            <div v-for="(attached, index) in attachedFiles" :key="index" class="relative">

                                <img :src="attached.src" 
                                class="aspect-square object-cover object-center w-10 h-10 overflow-hidden shrink-0" 
                                alt="Imagem anexada">

                                <button @click="removeAttachedFile(index)"
                                    class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs leading-none"
                                    style="transform: translate(50%, -50%);">&times
                                </button>

                            </div>
                        </div>

                    </div>
                    <button type="submit" @click.prevent="postComment"
                        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple rounded-lg hoverBlue">
                        Enviar comentário
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>