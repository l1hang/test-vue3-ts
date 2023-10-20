<script setup lang="ts">
import {  defineEmits } from "vue";
interface CheckListItem { 
  label: string;
  value: string;
}
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  checkList: {
    type: Array as () => CheckListItem[],
    default: () => [],
  },
  checkMore: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const change = (val: string[]) => {
  console.log(val);
  if(!props.checkMore && val.length > 1) {
    val.shift();
  }
  emit("update:modelValue", val);
};
</script>
<template>
  <el-checkbox-group v-model="props.modelValue" @change="change" >
    <el-checkbox
      v-for="item in checkList"
      :key="item.value"
      :label="item.value"
      border
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<style scoped lang="scss">
.el-checkbox {
  margin-right: 5%;
  margin-bottom: 5px;
}
:deep(.el-checkbox__inner) {
  display: none;
}
</style>
