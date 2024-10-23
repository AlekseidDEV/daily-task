<script setup lang="ts">

</script>

<template>
    <div class="task-progress__wrapper">
        <div>
            <slot name="complete"/>
            <p>- завершить задачу</p>
        </div>
    </div>
</template>

<style lang="scss">
@use '../../../shared/assets/quasar/variables';

.task-progress {
  &__wrapper {
    padding: 10px 0px;
    border-bottom: 1px solid variables.$grey-4;

    > div {
      display: flex;
      align-items: center;

      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>