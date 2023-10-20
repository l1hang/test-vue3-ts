<script setup lang="ts">
import { defineEmits, ref } from "vue";
//定义接收过来的cardList的数据类型
interface Card {
  name: string;
  sex: string;
  age: string;
  personType: string;
  idCard: string;
  localHome: string;
  selected: boolean;
}
const props = defineProps({
  cardList: {
    type: Array as () => Card[],
    required: true,
  },
  showTooltip: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["click", "update:showTooltip"]);
const selectedCard = ref<Card | null>(null);
const click = (item: Card) => {
  props.cardList.forEach((card) => {
    if (card !== item) {
      card.selected = false;
    }
  });
  item.selected = true;
  selectedCard.value = item;
  emits("click", item);
};
const handleMouseOver = () => {
  emits("update:showTooltip", true);
};
const handleMouseLeave = () => {
  emits("update:showTooltip", false);
};
</script>
<template>
  <div
    class="card_person"
    v-for="item in props.cardList"
    :key="item.idCard"
    @click="click(item)"
    :class="{ selected: item === selectedCard }"
  >
    <div class="card_line"></div>
    <div class="person_name">
      <h1>{{ item.name }}</h1>
      <p>{{ item.sex }} &nbsp;&nbsp;{{ item.age }}岁</p>
    </div>
    <div class="person_id">
      <div
        class="person_type"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
      >
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <div class="tooltip"  v-if="showTooltip" >
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
        <i>{{ item.personType }}</i>
      </div>
      </div>
      <div class="home_id">
        <div class="id_card">
          <div class="card_img"></div>
          <p>{{ item.idCard }}</p>
        </div>
        <div class="local_home">
          <div class="home_img"></div>
          <p>{{ item.localHome }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.selected {
  background-color: #f0f0f0;
}
.card_person {
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #8eb7ff;
  cursor: pointer;
  position: relative;
  .card_line {
    width: 20px;
    height: 100%;
    background-image: url("@/assets/card_line.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .person_name {
    width: 100px;
    height: 60px;
    /* background: #414F64; */
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
