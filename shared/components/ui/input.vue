<script setup lang="ts">
  defineProps<{
    placeholder?: string
  }>()

  const inputModel = defineModel<string>()
</script>

<template>
    <q-input
        v-model="inputModel"
        :placeholder="placeholder"
        standout
        dense
    >
        <template #prepend>
            <slot name="prepend-slot"/>
        </template>
    </q-input>
</template>

<style scoped lang="scss">

</style>