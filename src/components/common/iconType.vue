<script setup lang="ts">
const {icon} = defineProps<{
    icon:any
}>()

</script>

<template>
<el-icon><component :is="icon"></component></el-icon>
</template>

<style scoped>

</style>