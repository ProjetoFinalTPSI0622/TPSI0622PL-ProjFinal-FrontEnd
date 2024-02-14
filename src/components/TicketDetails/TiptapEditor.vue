<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css';

import BoldIcon from 'vue-material-design-icons/FormatBold.vue'
import ItalicIcon from 'vue-material-design-icons/FormatItalic.vue'
import UnderlineIcon from 'vue-material-design-icons/FormatUnderline.vue'
import StrikeIcon from 'vue-material-design-icons/FormatStrikethrough.vue'
import Header1Icon from 'vue-material-design-icons/FormatHeader1.vue'
import Header2Icon from 'vue-material-design-icons/FormatHeader2.vue'
import BulletListIcon from 'vue-material-design-icons/FormatListbulleted.vue'
import OrderListIcon from 'vue-material-design-icons/FormatListnumbered.vue'
import BlockQuoteIcon from 'vue-material-design-icons/FormatQuoteClose.vue'
import HorizontalIcon from 'vue-material-design-icons/Minus.vue'
import UndoIcon from 'vue-material-design-icons/Undo.vue'
import RedoIcon from 'vue-material-design-icons/Redo.vue'

const props = defineProps({
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
    content: props.modelValue,
    onUpdate({ editor }) {
        emit('update:modelValue', editor.getHTML())
    },

    extensions: [
        StarterKit,
        Underline,
        Placeholder.configure({
            placeholder: 'Escreva o seu comentário...',
            emptyEditorClass: 'cursor-text before:content-[attr(data-placeholder)] before:absolute before:top before:left before:text-mauve-11 before:opacity-50 before-pointer-events-none',
        }),
    ],
    editorProps: {
        attributes: {
            class: 'w-full h-28 px-0 text-base text-gray-900 bg-grey focus:outline-none focus-visible:outline-none prose max-w-none overflow-y-auto',
        },
    },
})

watch(() => props.modelValue, (newValue) => {
    editor.value.commands.setContent(newValue);
})

const isEmojiPickerVisible = ref(false)
const attachedFiles = ref([])

const toggleEmojiPicker = () => {
    isEmojiPickerVisible.value = !isEmojiPickerVisible.value
}

const onSelectEmoji = (emoji) => {
    editor.chain().focus().insertContent(emoji.i).run()
    isEmojiPickerVisible.value = false
}

const triggerFileInput = () => {
    fileInputRef.value.click()
}

const handleFileChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
        attachedFiles.value.push({ src: e.target.result })
    }
    reader.readAsDataURL(file)
}

const removeAttachedFile = (index) => {
    attachedFiles.value.splice(index, 1)
}

const fileInputRef = ref(null)

</script>

<template>
    <section v-if="editor" class="buttons flex items-center flex-wrap gap-x-4 p-2">

        <button type="button" @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('bold') }">
            <BoldIcon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('italic') }">
            <ItalicIcon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('underline') }">
            <UnderlineIcon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('strike') }">
            <StrikeIcon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('heading', { level: 1 }) }">
            <Header1Icon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('heading', { level: 2 }) }">
            <Header2Icon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('bulletList') }">
            <BulletListIcon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('orderedList') }">
            <OrderListIcon />
        </button>
        <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'bg-gray-300 rounded': editor.isActive('blockquote') }">
            <BlockQuoteIcon />
        </button>
        <button type="button" @click="editor.chain().focus().setHorizontalRule().run()">
            <HorizontalIcon />
        </button>
        <button type="button" class="disabled:text-gray-400" @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()">
            <UndoIcon />
        </button>
        <button type="button" @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()" class="disabled:text-gray-400">
            <RedoIcon />
        </button>
        <div class="relative">
            <button type="button" @click="toggleEmojiPicker"
                class="inline-flex justify-center items-center text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                <img src="../../assets/emoji.svg" />
            </button>
            <div v-if="isEmojiPickerVisible" class="absolute bottom-full mb-2 left-0 z-50">
                <EmojiPicker v-if="isEmojiPickerVisible" :native="true" @select="onSelectEmoji" />
            </div>
        </div>
        <button type="button" @click="triggerFileInput"
            class="inline-flex justify-center items-center text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
            <img src="../../assets/attach.svg" />
        </button>
        <input type="file" ref="fileInputRef" @change="handleFileChange" class="hidden" />
        <div v-if="attachedFiles.length" class="flex gap-3">
            <div v-for="(attached, index) in attachedFiles" :key="index" class="relative">
                <img :src="attached.src" class="aspect-square object-cover object-center w-10 h-10 overflow-hidden shrink-0"
                    alt="Attached image">
                <button @click="removeAttachedFile(index)"
                    class="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs leading-none"
                    style="transform: translate(50%, -50%);">&times;
                </button>
            </div>
        </div>
    </section>
    <editor-content :editor="editor" />
</template>