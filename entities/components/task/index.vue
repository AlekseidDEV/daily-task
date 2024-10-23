<script setup lang="ts">
import type {Tasks} from "~/entities/components/task/model/interface/tasks";

const props = defineProps<{
  task: Tasks
  accented?: boolean
}>()

const isComplete = computed(() => {
  return props.task.complete ? 'task--completed' : ''
})

const isAccented = computed(() => {
  return props.accented ? 'task--border-bottom' : ''
})
</script>

<template>
    <div
        class="task__wrapper"
        :class="isComplete"
    >
        <div class="task__content">
            <slot name="prepend"/>
            <div
                class="task__task-field"
                :class="isAccented"
            >
                <slot name="title">{{task.title}}</slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../../../shared/assets/quasar/variables';

  .task {
    &__wrapper{
      width: 100%;
    }
    &__content {
      display: flex;
      align-items: center;
      width: inherit;
    }
    &__task-field{
      width: inherit;
      padding: 10px;
    }
    &--highlighted{
      background: variables.$grey-2;
    }
    &--completed{
      color: variables.$grey-5;
    }
    &--border-bottom{
      border-bottom: 1px solid variables.$grey-2;
    }
  }
</style>