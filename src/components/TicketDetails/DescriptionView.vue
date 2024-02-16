<script setup>

const props = defineProps({
    myTicket: Object
});
</script>

<template>
    <div class="flex gap-4">
        <div class="flex flex-col text-lg gap-4 text-wrap">
            <div class="flex gap-1">
                <img src="../../assets/description.svg" />
                <p class="text-2xl ">
                    Ticket Description
                </p>
            </div>
            <div class="prose max-w-none">
                <p class="text-black text-opacity-70" v-html="myTicket.description"></p>

                <div v-if="myTicket.attachments && myTicket.attachments.length" class="mt-4">
                    <span v-for="(attachment, index) in myTicket.attachments" :key="index" class="ml-2 inline-block">
                        <img :src="attachment.FilePath" class="max-w-lg rounded-lg" :alt="'Attachment ' + (index + 1)" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>