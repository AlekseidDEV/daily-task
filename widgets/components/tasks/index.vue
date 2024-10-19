<script setup lang="ts">
  const splitterModel = ref(50)
</script>

<template>
    <div>
        <q-splitter v-model="splitterModel">
            <template #before>
                hello
            </template>
            <template #after>
                after
            </template>
        </q-splitter>
    </div>
</template>

<style scoped lang="scss">

</style>