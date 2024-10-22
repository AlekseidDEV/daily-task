<script setup lang="ts">
  import {useAddTask} from "~/features/components/add-task/model/useAddTask";

  const inputValue = ref('')

  const isShowIconAdd = computed(() => {
    return inputValue.value.length > 0 ? false : true
  })

  const addTask = () => {
    useAddTask(inputValue.value)
    inputValue.value = ''
  }
</script>

<template>
    <div>
        <ui-input
            v-model="inputValue"
            placeholder="Добавить задачу"
            @keyup.enter="addTask"
        >
            <template #prepend-slot>
                <q-icon
                    v-if="isShowIconAdd"
                    name="add"
                    size="18px"
                    color="grey"
                />
            </template>
        </ui-input>
    </div>
</template>

<style scoped lang="scss">

</style>