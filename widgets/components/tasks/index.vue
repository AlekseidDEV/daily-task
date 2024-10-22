<script setup lang="ts">
const splitterModel = ref(74)
</script>

<template>
    <div>
        <q-splitter
            v-model="splitterModel"
            style="height: 100vh"
            :limits="[30, 74]"
        >
            <template #before>
                <tasks-list-view/>
            </template>
            <template #after>
                <tasks-right-view/>
            </template>
        </q-splitter>
    </div>
</template>

<style scoped lang="scss">

</style>