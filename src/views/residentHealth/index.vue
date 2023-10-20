<script setup lang="ts">
//导入组件
import baseCheckboxGroup from "@/components/baseCheckboxGroup.vue";
import baseCardPerson from "@/components/baseCardPerson.vue";
import basePersonMessage from "@/components/basePersonMessage.vue";
//引入图标
import {
  CirclePlus,
  Edit,
  Search,
  User,
  Printer,
  Document,
} from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
const searchCode = ref(""); // 搜索框
const attributeList = ref([
  // 人员属性列表
  { label: "一般人群", value: "1" },
  { label: "高血压", value: "2" },
  { label: "糖尿病", value: "3" },
  { label: "精神障碍", value: "4" },
  { label: "儿童", value: "5" },
  { label: "老年人", value: "6" },
]);
const recordStatus = ref([
  // 档案状态列表
  { label: "正常", value: "1" },
  { label: "注销", value: "2" },
  { label: "死亡", value: "3" },
  { label: "迁出", value: "4" },
  { label: "其他", value: "5" },
]); // 档案状态
interface Card {
  name: string;
  sex: string;
  age: string;
  personType: string;
  idCard: string;
  localHome: string;
  selected: boolean;
}
const cardPersonList = ref<Card[]>([
  //人员列表
  {
    name: "马拉多纳",
    sex: "男",
    age: "64",
    personType: "高",
    idCard: "77886657584",
    localHome: "高新街道创新时代",
    selected: false,
  },
  // {
  //   name:'罗纳尔多',
  //   sex:'男',
  //   age:'64',
  //   personType:'高',
  //   idCard:'77886657584',
  //   localHome:'高新街道创新时代',
  //   selected: false,
  // }
]);
const clickPerson = (item: Card) => {
  // 点击人员列表
  console.log(item);
};
interface Tree {
  //定义树的数据类型
  label: string;
  children?: Tree[];
}
const handleNodeClick = (data: Tree) => {
  // 点击树节点
  console.log(data);
};
const data: Tree[] = [
  // 树的数据
  {
    label: "地区名（6）",
    children: [
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
      {
        label: "街道名称",
      },
    ],
  },
];
const defaultProps = {
  // 树的默认属性
  children: "children",
  label: "label",
};

//引入人员属性查询接口和返回数据api
import {
  getResidentHealth,
  ResponseData,
  getSearch,
  getRecord,
} from "@/api/residentHealth";
//获取人员属性列表数据
const getAttributeList = async () => {
  const res = await getResidentHealth("RYSX");
};
//获取档案状态列表数据
const getRecordStatusList = async () => {
  const res = await getResidentHealth("DAZT");
};
//定义查询对象
const queryData = ref({
  key: "",
  personAttributes: "",
  recordState: "1",
  current: 1,
  size: 10,
});
//获取查询列表数据
const getSearchList = async (queryData: {
  current: number;
  size: number;
  key: string;
  personAttributes: string;
  recordState: string;
}) => {
  const { current, size, key, personAttributes, recordState } = queryData;
  const res = await getSearch(
    current,
    size,
    key,
    personAttributes,
    recordState
  );
};
//获取人员档案信息
const getRecordList = async (hrGid: string) => {
  const res = await getRecord(hrGid);
};
onMounted(() => {
  // getAttributeList()
  // getRecordStatusList()
  // getSearchList(queryData.value)
  // getRecordList('3d22b82551d397d4d1692c429369c955')
});
const clickSearch = () => {
  console.log(searchCode.value);
};
const checkAttribute = ref([]);
const checkStatus = ref([]);
const showTooltip = ref(false);
</script>
<template>
  <div class="health_content">
    <div class="content_header">
      <el-button color="#4A80F7" :icon="CirclePlus">新增档案</el-button>
      <el-button color="#626aef" type="primary" :icon="User"
        >新增成员</el-button
      >
      <el-button color="#2F7AFF" :icon="Edit" disabled>修改</el-button>
      <el-button type="warning" :icon="Printer">打印</el-button>
      <el-button type="success" :icon="Document">导出Excel</el-button>
    </div>
    <div class="content_body">
      <div class="body_search">
        <div class="search_input">
          <el-input
            v-model="searchCode"
            size="small"
            placeholder="姓名/身份证号/档案号/自定义编号"
            style="width: 310px"
          >
            <template #append>
              <el-button :icon="Search" @click="clickSearch" />
            </template>
          </el-input>
        </div>
        <div class="search_button">
          <div class="button_person">
            <div class="person_text">人员属性</div>
            <div class="person_list">
              <baseCheckboxGroup
                :checkList="attributeList"
                v-model="checkAttribute"
              />
            </div>
          </div>
          <div class="button_record">
            <div class="person_text">档案状态</div>
            <div class="record_status">
              <baseCheckboxGroup
                :checkList="recordStatus"
                v-model="checkStatus"
                :checkMore="false"
              />
            </div>
          </div>
          <div class="local_area">
            <div class="person_text">归属地区</div>
            <div class="area_list">
              <el-tree
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick"
              />
            </div>
          </div>
          <div class="family_record">
            <div class="person_text">家庭档案</div>
            <div class="record_message">
              <div class="message_number">
                <p><i>户主档案管理单位</i>XXXXXXXXXXX3335</p>
                <p><i>户主现地址</i>XXXXXXXX33444XXX3335</p>
                <p><i>家庭档案编号</i>443444644848</p>
              </div>
              <div class="relation">
                <div class="message_relate">
                  <p>马拉多纳</p>
                  <div class="relate_person">与户主关系：本人</div>
                </div>
              </div>
              <div class="relation">
                <div class="message_relate">
                  <p>梅西</p>
                  <div class="relate_person">与户主关系：队友</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="body_table">
        <div class="table_result">
          <p>查询结果：3487</p>
          <p>当前数量：284</p>
        </div>
        <div class="table_card">
          <base-card-person
            v-model:showTooltip="showTooltip"
            @update:showTooltip="showTooltip = $event"
            :cardList="cardPersonList"
            @click="clickPerson"
          />
        </div>
        <div class="table_page">
          <div class="page_up">上一页</div>
          <div class="page_down">下一页</div>
        </div>
      </div>
      <div class="body_content">
        <div class="content_title">
          <div class="image"></div>
          <p>档案管理</p>
          <div class="title_status">正常</div>
        </div>
        <el-scrollbar height="700px">
          <base-person-message />
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.health_content {
  padding: 0 40px;

  .content_header {
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 20px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 20px;
    .el-button {
      margin-left: 20px;
      width: 100px;
      height: 36px;
    }
  }
  .content_body {
    display: flex;
    justify-content: space-between;
    height: 780px;
    width: 100%;
    align-items: center;
    .person_text {
      height: 20px;
      width: 100%;
      border-left: 5px solid #377cf7;
      font-size: 16px;
      font-weight: 500;
      padding-left: 10px;
    }
    .body_search {
      display: flex;
      height: 100%;
      width: 370px;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      padding-top: 10px;
      background: #ffffff;
      .search_input {
        height: 37px;
      }
      .search_button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 713px;
        width: 310px;
        .button_person {
          display: flex;
          flex-direction: column;
          height: 120px;
          width: 100%;
          .person_list {
            width: 310px;
            height: 100px;
            margin-top: 10px;
            .el-checkbox {
              margin-right: 5%;
              margin-bottom: 5px;
            }
            :deep(.el-checkbox__inner) {
              display: none;
            }
          }
        }
        .button_record {
          display: flex;
          flex-direction: column;
          height: 120px;
          width: 100%;
          .record_status {
            width: 310px;
            height: 100px;
            margin-top: 10px;
            .el-checkbox {
              margin-right: 5%;
              margin-bottom: 5px;
            }
            :deep(.el-checkbox__inner) {
              display: none;
            }
          }
        }
        .local_area {
          display: flex;
          flex-direction: column;
          height: 220px;
          width: 100%;
          .area_list {
            width: 310px;
            height: 100%;
            margin-top: 10px;
            :deep(.el-tree-node__content) {
              height: 26px;
            }
            :deep(.el-tree-node__children) {
              height: 164px;
              overflow: auto !important;
            }
            :deep(.el-tree-node__content > .el-tree-node__expand-icon) {
              width: 11px;
              height: 11px;
              background-image: url("@/assets/fold.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            :deep(.el-tree-node__label) {
              margin-left: 15px;
            }
            :deep(.el-icon svg) {
              display: none;
            }
          }
        }
        .family_record {
          display: flex;
          flex-direction: column;
          height: 220px;
          width: 100%;
          .record_message {
            display: flex;
            flex-direction: column;

            width: 310px;
            height: 100%;
            margin-top: 10px;
            .message_number {
              height: 94px;
              margin-bottom: 10px;
              p {
                font-size: 12px;
                color: #414f64;
              }
              i {
                font-size: 13px;
                font-weight: 600;
                color: #377cf7;
                margin-right: 20px;
              }
            }
            .relation {
              height: 40px;
              background: #e4e7ed;
              padding: 2px 2px;
              border-radius: 8px;
              margin-bottom: 8px;
              .message_relate {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 30px;
                background: #ffffff;
                padding: 5px 10px;
                border-radius: 8px;
                p {
                  font-size: 16px;
                  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
                  font-weight: bold;
                  color: #414f64;
                }
                .relate_person {
                  width: 140px;
                  height: 22px;
                  background: #e8eaf0;
                  font-size: 14px;
                  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                  font-weight: 500;
                  color: #414f64;
                  border-radius: 8px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
    .body_table {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 370px;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      border-radius: 10px;
      padding-top: 10px;
      .table_result {
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 350px;
        font-size: 14px;
        font-weight: 500;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        color: #414f64;
        border-bottom: 1px dashed #414f64;
      }
      .table_card {
        display: flex;
        flex-direction: column;
        height: 630px;
        width: 350px;
      }
      .table_page {
        display: flex;
        justify-content: center;
        height: 50px;
        width: 370px;
        font-size: 16px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #ffffff;
        .page_up,
        .page_down {
          height: 100%;
          width: 185px;
          background: #eef8ff;
          text-align: center;
          line-height: 50px;
          color: #2f7aff;
        }
        .page_up {
          border-bottom-left-radius: 10px;
        }
        .page_down {
          border-bottom-right-radius: 10px;
        }
        .page_up:hover {
          background: #2f7aff;
          cursor: pointer;
          border-bottom-left-radius: 10px;
          color: #ffffff;
        }
        .page_down:hover {
          background: #2f7aff;
          cursor: pointer;
          border-bottom-right-radius: 10px;
          color: #ffffff;
        }
      }
    }
    .body_content {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 840px;
      border-radius: 10px;
      padding-top: 10px;
      background: #ffffff;
      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 40px;
        width: 100%;
        .image {
          width: 21px;
          height: 16px;
          background-image: url("@/assets/record_manage.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-left: 15px;
        }
        p {
          font-size: 16px;
          font-family: SourceHanSansCN-Bold, SourceHanSansCN;
          font-weight: bold;
          color: #414f64;
          margin-left: 5px;
        }
        .title_status {
          width: 50px;
          height: 22px;
          background: rgba(12, 172, 11, 0.1);
          border-radius: 4px;
          border: 1px solid #0cac0b;
          font-size: 14px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #0cac0b;
          margin-left: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>
