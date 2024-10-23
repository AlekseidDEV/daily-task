<script setup lang="ts">
import {useTaskStore} from "~/entities/components/task/model/stores/store";

const store = useTaskStore()
const splitterModel = ref(74)

onMounted(() => {
  store.getList()
})
</script>

<template>
    <div>
        <q-splitter
            v-model="splitterModel"
            style="height: 100vh"
            :limits="[30, 74]"
        >
            <template #before>
                <tasks-widget-list-view/>
            </template>
            <template #after>
                <tasks-widget-right-view/>
            </template>
        </q-splitter>
    </div>
</template>

<style scoped lang="scss">

</style>