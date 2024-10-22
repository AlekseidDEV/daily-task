<script setup lang="ts">
defineProps<{
  title: string
}>()

</script>

<template>
    <div
        class="task__wrapper">
        <div class="task__content">
            <slot name="prepend"/>
            <div class="task__task-field">
                <slot name="title">{{title}}</slot>
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
      border-bottom: 1px solid variables.$grey-2;
      width: inherit;
      padding: 10px;
    }
    &--highlighted{
      background: variables.$grey-2;
    }
  }
</style>