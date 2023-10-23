<script setup lang="ts">
import { useMenu } from "./useMenu";
const { menuItems } = useMenu(); //解构出菜单项
import IconType from "@/components/common/iconType.vue"; //图标类型
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <div class="main_menu">
    <!-- 导航菜单 -->
    <el-menu
      class="el-menu-vertical-demo"
      router
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#545c64"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item :index="v.url" v-for="v in menuItems" :key="v.url">
        <IconType :icon="v.icon" />
        <span>{{ v.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 965px;
  background-color: #92b2d2;
  margin-right: 10px;
}
</style>
