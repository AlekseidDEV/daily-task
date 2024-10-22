<script setup lang="ts">

import {useChangeTitleTask} from "~/features/components/edit-title-task/model/useChangeTitleTask";

const props = defineProps<{
  tagOrder: string
  dynamicTitle: string
  idTask: string
}>()

const editTitle = ref(false)
const fieldValue = ref(props.dynamicTitle)

watch(() => props.dynamicTitle, (newValue) => {
  fieldValue.value = newValue
})
</script>

<template>
    <div
        class="edit-title-task__wrapper"
        @dblclick="editTitle = true"
    >
        <component
            :is="tagOrder"
            v-if="!editTitle"
            :class="`edit-title-task__${tagOrder}-title`">{{dynamicTitle}}
        </component>
        <q-input
            v-else
            v-model="fieldValue"
            borderless
            autofocus
            dense
            :class="`edit-title-task__${tagOrder}-input`"
            @update:model-value="useChangeTitleTask(fieldValue, idTask)"
            @blur="editTitle = false"
            @keyup.enter="editTitle = false"
            @keyup.space="fieldValue += ' '"
        />
        <div/>
    </div>
</template>

<style lang="scss">
.edit-title-task{
  &__wrapper{
    padding-left: 13px;
  }

  &__p-title{
    margin-bottom: 0;
  }
  &__h3-title{
    font-size: 20px;
    font-weight: bold;
  }
  &__p-input {
    .q-field__control{
      height: 20px;
    }
  }
  &__h3-input{
    .q-field__control input{
      font-size: 20px;
      font-weight: bold;
      color: #000;
    }
  }
}
</style>