<script setup lang="ts">
import type {Tasks} from "~/entities/components/task/model/interface/tasks";
import {useTaskStore} from "~/entities/components/task/model/stores/store";

defineProps<{
  name: string
  dataTasks: Tasks[]
}>()

const store = useTaskStore()

</script>

<template>
    <div class="task-list__wrapper q-mt-md">
        <div>
            <ui-tree
                :name-list="name"
                :tasks="dataTasks"
                :count="dataTasks.length"
            >
                <template #insert-task="{node}">
                    <task
                        :key="node.id"
                        :title="node.title"
                        :class="store.selectedTask?.id === node.id ? 'task--highlighted' : ''"
                        @click="store.selectTask(node.id)"
                    >
                        <template #title>
                            <div>
                                <edit-title-task
                                    :id-task="node.id"
                                    tag-order="p"
                                    :dynamic-title="node.title"
                                />
                            </div>
                        </template>
                        <template #prepend>
                            <complete-task
                                :id-task="node.id"
                                :is-complete="node.complete"
                            />
                        </template>
                    </task>
                </template>
            </ui-tree>
        </div>
    </div>
</template>

<style lang="scss">

</style>