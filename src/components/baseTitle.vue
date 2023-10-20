<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 4,
  },
  height: {
    type: Number,
    default: 14,
  },
  borderRadius: {
    type: Number,
    default: 1,
  },
  showLine: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="base_title">
    <div class="title_icon" :style="{ width: props.width + 'px', height: props.height + 'px', borderRadius: props.borderRadius + '%' }"></div>
    <div class="person_text">{{ props.title }}</div>
    <div class="title_line" v-if="props.showLine" ></div>
  </div>
</template>

<style scoped lang="scss">
.base_title {
  display: flex;
  align-items: center;
  height: 20px;
  width: 100%;
  font-size: 16px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #414f64;
  margin-left: 20px;
  .title_icon {
    /* width: 4px;
    height: 14px; */
    background: #377cf7;
    /* border-radius: 1px; */
    margin-right: 10px;
    margin-top: 2px;
  }
  .title_line {
    width: 650px;
    height: 1px;
    background: #E8EAF0;
    margin-left: 20px;
  }
}
</style>
