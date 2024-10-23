<script setup lang="ts">
import {useCompleteTask} from "~/features/components/complete-task/model/useCompleteTask";

const props = defineProps<{
  idTask: string
  isComplete: boolean
}>()

const checkboxModel = ref(props.isComplete)

watch(() => props.isComplete, (newValue) => {
  checkboxModel.value = newValue
})
</script>

<template>
    <div>
        <q-checkbox
            v-model="checkboxModel"
            :color="checkboxModel ? 'grey-3' : 'grey-6'"
            size="33px"
            :val="idTask"
            @update:model-value="useCompleteTask(checkboxModel, props.idTask)"
        />
    </div>
</template>

<style lang="scss">

</style>