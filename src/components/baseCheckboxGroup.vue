<script setup lang="ts">
interface CheckListItem { 
  label: string;
  value: string;
}
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
    readonly: false, 
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
  height: 32px;
  background: #E8EAF0;
  border-radius: 4px;
  opacity: 0.5;
  font-size: 16px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #717C8C;
}
.is-bordered.is-checked  {
  height: 32px;
  background: #2F7AFF;
  box-shadow: 0px 3px 5px 0px rgba(54,122,245,0.25);
  border-radius: 4px;
  :deep(.el-checkbox__label) {
    color: #FFFFFF;
  }
}
:deep(.el-checkbox__inner) {
  display: none;
}

</style>
