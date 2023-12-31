<script setup lang="ts">
//导入组件
import baseCheckboxGroup from "@/components/baseCheckboxGroup.vue";
import baseCardPerson from "@/components/baseCardPerson.vue";
import basePersonMessage from "@/components/basePersonMessage.vue";
import baseTitle from "@/components/baseTitle.vue";
//引入图标
import {
  CirclePlus,
  Edit,
  Search,
  User,
  Printer,
  Document,
} from "@element-plus/icons-vue";
//引入vue3组件
import { onMounted, ref } from "vue";
//引入接口方法
import {
  getResidentHealth,
  ResponseData,
  getSearch,
  getRecord,
} from "@/api/residentHealth";
import {filterStatus} from "@/utils/filter/filterMore"
//树start
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
//树end

// 人员属性列表
const attributeList = ref([]);
// 档案状态列表
const recordStatus = ref([]); 
//人员列表
const cardPersonList = ref([]);
//定义查询对象
const queryData = ref({
  key: "",
  personAttributes: "",
  recordState: "",
  current: 1,
  size: 10,
});
const checkAttribute = ref([]); //定义选中的人员属性
const checkStatus = ref([]);  //定义选中的档案状态
const showTooltip = ref(false); //定义鼠标移入移出事件
const formData = ref({
  recordState:'1'
})
const searchTotal = ref(0)
const currentSize = ref(0)
const isDataLoaded = ref(false)
onMounted(() => {
  getAttributeList()
  getRecordStatusList()
  getSearchList(queryData.value)
});
//获取人员属性列表数据
const getAttributeList = async () => {
  try {
    const res = await getResidentHealth("RYSX");
    const {data} = res as ResponseData
  attributeList.value = data.map((item:any) => {
    return {
      label: item.dictName,
      value: item.dictValue
    }
  })
  } catch (error) {
    console.log(error);
  }
};
//获取档案状态列表数据
const getRecordStatusList = async () => {
  try{
    const res = await getResidentHealth("DAZT");
    const {data} = res as ResponseData
    recordStatus.value = data.map((item:any) => {
      return {
        label: item.dictName,
        value: item.dictValue
      }
    })
  }catch(error) {
    console.log(error);
  }
};
//获取查询列表数据
const getSearchList = async (queryData:any) => {
  try {
    const { current, size, key, personAttributes, recordState } = queryData;
    const res = await getSearch(current, size, key, personAttributes, recordState);
    const {data } = res as ResponseData
    searchTotal.value = data.total
    currentSize.value = data.size
    cardPersonList.value = data.records
    // 处理响应数据
  } catch (error) {
    console.log(error);
  }
};
//获取人员档案信息
const getRecordList = async (hrGid: string) => {
  try{
    const res = await getRecord(hrGid);
    const {data} = res as ResponseData
    formData.value = data
  }catch(error) {
    console.log(error);
  }
};
// 点击人员列表
const clickPerson =  async (item:any) => {
  isDataLoaded.value = true;
  formData.value = {
  recordState:'1'
  }
  await getRecordList(item.hrGid)
};
//点击查询框
const clickSearch = async() => {
  console.log(queryData.value.key);
  queryData.value.personAttributes = changeObject(checkAttribute.value)
  queryData.value.recordState = changeObject(checkStatus.value)
  await getSearchList(queryData.value)
};
//处理对象
const changeObject = (val:object) => {
  const values = Object.values(val)
  const result = values.join(',')
  return result
}
//上一页点击事件
const chickUp = async() => {
  if(queryData.value.current <= 1) {
    return
  }
  queryData.value.current -= 1
  await getSearchList(queryData.value)
}
//下一页点击事件
const chickDown = async() => {
  if(queryData.value.current >= Math.ceil(searchTotal.value / currentSize.value)) {
    return
  }
  queryData.value.current += 1
  await getSearchList(queryData.value)
}
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
            v-model="queryData.key"
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
            <baseTitle title="人员属性" :showLine="false"/>
            <div class="person_list">
              <baseCheckboxGroup
                :checkList="attributeList"
                v-model="checkAttribute"
              />
            </div>
          </div>
          <div class="button_record">
            <baseTitle title="档案状态" :showLine="false"/>
            <div class="record_status">
              <baseCheckboxGroup
                :checkList="recordStatus"
                v-model="checkStatus"
                :checkMore="false"
              />
            </div>
          </div>
          <div class="local_area">
            <baseTitle title="归属地区" :showLine="false"/>
            <div class="area_list">
              <el-tree
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick"
              />
            </div>
          </div>
          <div class="family_record">
            <baseTitle title="家庭档案" :showLine="false"/>
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
          <p>查询结果：{{  searchTotal || '暂无数据'}}</p>
          <p>当前数量：{{ currentSize || '暂无数据'}}</p>
        </div>
        <div class="table_card" v-loading="false">
          <base-card-person
            v-model:showTooltip="showTooltip"
            @update:showTooltip="showTooltip = $event"
            :cardList="cardPersonList"
            @click="clickPerson"
          />
        </div>
        <div class="table_page">
          <div class="page_up" @click="chickUp" :class="{ disabled: queryData.current <= 1 }">上一页</div>
          <div class="page_down" @click="chickDown" :class="{ disabled: cardPersonList.length <= 10 }">下一页</div>
        </div>
      </div>
      <div class="body_content">
        <div class="content_title">
          <div class="image"></div>
          <p>档案管理</p>
          <div class="title_status" v-if="Object.keys(formData).length > 1">{{  filterStatus(formData.recordState)}}</div>
        </div>
        <el-scrollbar height="831px" >
          <div v-if="!isDataLoaded" class="no-data"></div>
          <base-person-message :formData="formData" v-if="Object.keys(formData).length > 1"/>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.health_content {
  width: 1639px;
  height: 955px;

  .content_header {
    width: 1639px;
    height: 64px;
    background: #FFFFFF;
    box-shadow: 0px 1px 21px 0px rgba(38,46,45,0.06);
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    .el-button {
      margin-right: 20px;
      width: 100px;
      height: 36px;
    }
  }
  .content_body {
    width: 1639px;
    height: 881px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .base_title {
      margin-left: -5px;
    }
    .body_search {
      width: 329px;
      height: 881px;
      background: #FFFFFF;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.06);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .search_input {
        width: 300px;
        height: 37px;
        margin-bottom: 18px;
        margin-top: 15px;
      }
      .search_button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .base_title {
            width: 300px;
            height: 24px;
          }
        .button_person {
          display: flex;
          flex-direction: column;
          width: 300px;
          /* height: 157.99px; */
          margin-bottom: 21px;
          .person_list {
            width: 299px;
            /* height: 117.23px; */
            margin-top: 17px;
          }
        }
        .button_record {
          display: flex;
          flex-direction: column;
          width: 300px;
          /* height: 113.99px; */
          margin-bottom: 20px;
          .record_status {
            width: 299px;
            /* height: 74.62px; */
            margin-top: 17px;
          }
        }
        .local_area {
          display: flex;
          flex-direction: column;
          height: 100px;
          width: 300px;
          margin-bottom: 12px;
          .area_list {
            width: 300px;
            height: 200px;
            margin-top: 17px;
            :deep(.el-tree-node__content) {
              height: 26px;
            }
            :deep(.el-tree-node__children) {
              height: 26px;
              overflow: auto !important;
            }
            :deep(.el-tree-node__content > .el-tree-node__expand-icon) {
              width: 11px;
              height: 11px;
              background-image: url("@/assets/images/fold.png");
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
          height: 244px;
          width: 300px;
          .record_message {
            display: flex;
            flex-direction: column;
            width: 300px;
            height: 208px;
            margin-top: 12px;
            .message_number {
              width: 272px;
              p {
                white-space: nowrap;
                width: 272px;
                height: 24px;
                margin: 11px 0 0 11px;
                color: rgba(102, 102, 102, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
              }
              i {
                color: rgba(47, 122, 255, 1);
                font-size: 14px;
                font-family: SourceHanSansCN-Regular;
                margin-right: 20px;
              }
            }
            .relation {
              width: 282px;
              height: 104px;
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
                  color: #414F64;
                }
                .relate_person {
                  width: 147px;
                  height: 22px;
                  background: #E8EAF0;
                  border-radius: 4px;
                  opacity: 0.5;
                  font-size: 14px;
                  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                  font-weight: 500;
                  color: #414F64;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
    .body_table {
      width: 340px;
      height: 881px;
      background: #FFFFFF;
      box-shadow: 0px 13px 27px 0px rgba(217,223,234,0.5);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      align-items: center;
      margin-left: 10px;
      .table_result {
        display: flex;
        justify-content: space-around;
        width: 333px;
        height: 40px;
        font-size: 14px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #414F64;
        border-bottom: 1px dashed #414f64;
      }
      .table_card {
        display: flex;
        flex-direction: column;
        width: 340px;
        height: 750px;
        margin-top: 3px;
      }
      .table_page {
        display: flex;
        justify-content: center;
        width: 340px;
        height: 38px;
        background: #EEF8FF;
        border: 1px solid #E8EAF0;
        font-size: 16px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #2F7AFF;
        border-radius: 0px 0px 10px 10px;
        margin-top: 50px;
        .disabled {
          pointer-events: none;
          cursor:not-allowed !important;
          background: #dce5e5;
       }
        .page_up,
        .page_down {
          width: 170px;
          height: 38px;
          border: 1px solid #E8EAF0;
          text-align: center;
          line-height: 38px;
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
      width: 950px;
      height: 881px;
      background: #FFFFFF;
      box-shadow: 0px 13px 27px 0px rgba(217,223,234,0.5);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .no-data {
        width: 100%;
        height: 820px;
        background-image: url('@/assets/images/empty_data.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 10% 15%;
      }
      .content_title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 953px;
        height: 50px;
        .image {
          width: 21px;
          height: 16px;
          background-image: url("@/assets/images/record_manage.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-left: 12px;
        }
        p {
          font-size: 16px;
          font-family: SourceHanSansCN-Bold, SourceHanSansCN;
          font-weight: bold;
          color: #414F64;
          margin-left: 2px;
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
          margin-left: 19px;
          text-align: center;
        }
      }
    }
  }
}
</style>
