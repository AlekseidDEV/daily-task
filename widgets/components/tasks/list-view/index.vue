<script setup lang="ts">
import {useTaskStore} from "~/entities/components/task/model/stores/store";
import type {ListType} from "~/widgets/components/tasks/list-view/model/listType";
import Input from "~/shared/components/ui/input.vue";

const store = useTaskStore()

const listTypes: ListType[] = [
  {name: 'Назначено', methodForList: 'getActiveTasks'},
  {name: 'Выполнено', methodForList: 'getCompleteTasks'},
]

onMounted(() => {
  store.getList()
})
</script>

<template>
    <div class="list-view__wrapper q-pa-md">
        <h2>Задачи</h2>
        <div class="q-mt-md">
            <add-task/>
            <div
                v-for="list of listTypes"
                :key="list.name"
            >
                <task-list
                    v-if="store[list.methodForList].length > 0"
                    :name="list.name"
                    :data-tasks="store[list.methodForList]"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>