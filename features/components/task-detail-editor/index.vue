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
    onFocus(props) {
      console.log(props.editor)
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
@use "../../../shared/assets/quasar/variables";

.editor{
  &__wrapper{
    margin-top: 10px;
    padding-left: 13px;
    padding-right: 13px;
  }
}

.ProseMirror {
  ul > li {
    list-style-type: none;
    padding-left: 17px;
    position: relative;
    p{margin-bottom: 10px;}
    &::before{
      position: absolute;
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 20px;
      background: variables.$blue-7;
      left: 0;
      top: 8px;
    }
  }
}

.ProseMirror-focused{
  outline: none;
}

.ProseMirror-focused.tiptap p.is-editor-empty:first-child::before {
  color: variables.$grey-6;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}
p.is-editor-empty{
  font-size: 14px;
  font-weight: 300;
}
</style>