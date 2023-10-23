<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
const scaleNumber = ref();
const bodyScale = () => {
  const deviceWidth = document.documentElement.clientWidth;
  const scale = deviceWidth / 1920;
  scaleNumber.value = scale;
};

onMounted(() => {
  bodyScale();
  window.onresize = () => {
    return (() => {
      bodyScale();
    })();
  };
});
onUnmounted(() => {
  window.onresize = null;
});
</script>

<template>
  <div id="app" :style="{ zoom: scaleNumber }">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  height: 955px;
  width: 100%;
}
</style>
