<script setup lang="ts">

import {useUpdateDescription} from "~/features/components/task-detail-editor/model/useUpdateDescription";
import {Editor} from "@tiptap/vue-3";

import type {Ref} from "vue";

const props = defineProps<{
  descriptionTask: string
  idTask: string
}>()

const {$tiptapExtensions} = useNuxtApp()

const editor: Ref<Editor | undefined> =  ref(undefined)

watch(() => props.descriptionTask, (newValue) => {
  editor.value?.commands.clearContent()
  editor.value?.commands.setContent(newValue)
})

onMounted(() => {
  editor.value = new Editor({
    extensions: [
        $tiptapExtensions.StarterKit,
        $tiptapExtensions.Placeholder.configure({
          placeholder: 'Введите содержимое...'
        })
    ],
    content: props.descriptionTask,
    onBlur() {
      useUpdateDescription(editor.value!.getHTML(), props.idTask)
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<template>
    <div
        class="editor__wrapper"
    >
        <tiptap-editor-content
            :editor="editor"
        />
    </div>
</template>

<style lang="scss">
.editor{
  &__wrapper{
    margin-top: 10px;
    padding-left: 13px;
    padding-right: 13px;
  }
}
</style>