<script setup lang="ts">

import {useTaskStore} from "~/entities/components/task/model/stores/store";

const currentTask = computed(() => useTaskStore().selectedTask)
const isViewBlock = computed(() => currentTask.value ? true : false)
</script>

<template>
    <div class="right-view__wrapper">
        <div
            v-if="isViewBlock"
            class="right-view__content">
            <task-progress>
                <template #complete>
                    <complete-task
                        :is-complete="currentTask!.complete"
                        :id-task="currentTask!.id"
                    />
                </template>
            </task-progress>
            <edit-title-task
                :dynamic-title="currentTask!.title"
                tag-order="h3"
                :id-task="currentTask!.id"
            />
            <task-detail-editor
                :description-task="currentTask!.description"
                :id-task="currentTask!.id"
            />
        </div>
        <div v-else>Показывать, если задача не выбрана</div>
    </div>
</template>

<style lang="scss">
.right-view{

}
</style>