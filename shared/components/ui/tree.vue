<script setup lang="ts">
import type {Tasks} from "~/entities/components/task/model/interface/tasks";

const props = defineProps<{
  nameList: string
  tasks: Tasks[]
  count: number
}>()

const modifiedChildrenList = computed(() => {
  return props.tasks.map((item) => {
    return {...item, body: 'task'}
  })
})

const treeList = reactive([
  {
    label: props.nameList,
    header: 'root',
    children: modifiedChildrenList
  }
])
</script>

<template>
    <q-tree
        class="ui-tree"
        node-key="label"
        :no-connectors="true"
        :default-expand-all="true"
        icon="chevron_right"
        :nodes="treeList">
        <template #header-root>
            <div>
                <span class="ui-tree__name-list">{{nameList}}</span>
                <span class="ui-tree__counter">{{count}}</span>
            </div>
        </template>
        <template #body-task="{node}">
            <slot
                :node="node"
                name="insert-task"
            />
        </template>
    </q-tree>
</template>

<style scoped lang="scss">

</style>