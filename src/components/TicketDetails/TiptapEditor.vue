<script setup>
import { defineProps, defineEmits, watch } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'

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

</script>

<template>
    <section v-if="editor" class="buttons flex items-center flex-wrap gap-x-4 p-2">

        <button type="button" @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'bg-gray-300 rounded': editor.isActive('bold') }">
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
        <button type="button" class="disabled:text-gray-400" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
            <UndoIcon />
        </button>
        <button type="button"  @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()"
        class="disabled:text-gray-400">
            <RedoIcon />
        </button>

    </section>
    <editor-content :editor="editor" />
</template>