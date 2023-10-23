<script setup lang="ts">
import NavMenu from './navMenu.vue' 

</script>
<template>
  <div id="main">
    <el-container>
      <!-- 左侧导航菜单 -->
      <NavMenu />
      <!-- 右侧内容 -->
      <el-container>
          <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">

</style>