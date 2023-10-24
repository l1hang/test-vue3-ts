<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
//导入筛选方法
import { filterAttribute ,getSex } from "@/utils/filter/filterMore";
import { getAge } from "@/utils/translate/index";
const props = defineProps({
  cardList: {
    type: Array as () => Array<any>,
    default: () => [],
  },
  showTooltip: {
    type: Boolean,
    default: false,
  },
});
//定义发射出去的数据类型
const emits = defineEmits(["click", "update:showTooltip"]);
//定义选中的card
const selectedCard = ref<null>(null);
onMounted(() => {

});
//定义选中的card
const click = (item: any) => {
  props.cardList.forEach((card) => {
    if (card !== item) {
      card.selected = false;
    }
  });
  item.selected = true;
  selectedCard.value = item;
  emits("click", item);
};
const showTooltip = ref<{ [key: string]: boolean }>({}); //定义鼠标移入移出事件
//定义鼠标移入移出事件
const handleMouseOver = (item: any) => {
  showTooltip.value[item.hrGid] = true;
  emits("update:showTooltip", true);
};
//定义鼠标移入移出事件
const handleMouseLeave = (item: any) => {
  showTooltip.value[item.hrGid] = false;
  emits("update:showTooltip", false);
};
</script>
<template>
  <div
    class="card_person"
    v-for="item in props.cardList"
    :key="item.hrGid"
    @click="click(item)"
    :class="{ selected: item === selectedCard }"
  >
    <div
      class="card_line"
      :class="{ visibleLine: item === selectedCard }"
    ></div>
    <div class="person_name">
      <h1>{{ item.name }}</h1>
      <p>{{ getSex(item.sex) }} &nbsp;&nbsp;{{ getAge(item.birthday) }}岁</p>
    </div>
    <div class="person_id">
      <div
        class="person_type"
        @mouseover="handleMouseOver(item)"
        @mouseleave="handleMouseLeave(item)"
      >
        <i
          v-for="(type, index) in filterAttribute(item.personAttributes)"
          :key="index"
          :style="{ borderColor: type.color, color: type.color }"
          >{{ type.text }}</i
        >
        <div
          class="tooltip"
          v-if="showTooltip[item.hrGid] && filterAttribute(item.personAttributes).length > 7"
        >
          <i
            v-for="(type, index) in filterAttribute(item.personAttributes)"
            :key="index"
            :style="{ borderColor: type.color, color: type.color }"
            >{{ type.text }}</i
          >
        </div>
      </div>
      <div class="home_id">
        <div class="id_card">
          <div class="card_img"></div>
          <p>{{ item.idcNo }}</p>
        </div>
        <div class="local_home">
          <div class="home_img"></div>
          <p>{{ item.presentjdAddressName }}{{  item.presentjdAddressCode}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.visibleLine {
  visibility: inherit !important;
}
.selected {
  background-color: #fff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #8eb7ff;
}
.card_person {
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  .card_line {
    width: 10px;
    height: 100%;
    background-image: url("@/assets/card_line.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    visibility: hidden;
  }
  .person_name {
    width: 100px;
    height: 60px;
    text-align: center;
    line-height: 10px;
    border-right: 1px solid #dbe2ef;
    h1 {
      font-size: 16px;
      font-family: SourceHanSansCN-Bold, SourceHanSansCN;
      color: #2f7aff;
    }
    p {
      font-size: 14px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      color: #414f64;
    }
  }
  .person_id {
    width: 230px;
    height: 100%;
    display: flex;
    flex-direction: column;
    .person_type {
      width: 190px;
      height: 24px;
      margin-left: 20px;
      margin-top: 5px;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis !important;
      i {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        border: 2px solid #fd5b55;
        color: #fd5b55;
        font-size: 16px;
        text-align: center;
        line-height: 22px;
        margin-right: 3px;
      }
    }
    .tooltip {
      width: auto;
      height: 24px;
      position: absolute;
      top: -30px;
      left: 65%;
      transform: translateX(-50%);
      padding: 5px;
      background-color: #e3e1e1;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
    }
    .home_id {
      display: flex;
      flex-direction: column;
      height: 45px;
      width: 190px;
      margin-left: 20px;
      p {
        width: 145px;
        height: 20px;
        font-size: 14px;
        font-family: AppleSystemUIFont;
        color: #414f64;
        margin-left: 10px;
      }
      .id_card {
        display: flex;
        align-items: center;
        width: 100%;
        height: 20px;
        .card_img {
          width: 13px;
          height: 11px;
          background-image: url("@/assets/id_card.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .local_home {
        display: flex;
        align-items: center;
        width: 100%;
        height: 20px;
        .home_img {
          width: 13px;
          height: 11px;
          background-image: url("@/assets/local_home.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
@/utils/translate/index