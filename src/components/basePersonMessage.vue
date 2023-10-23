<script setup lang="ts">
import baseTitle from "./baseTitle.vue";
import {ref} from "vue";
const props = defineProps({
    formData:{
      type:Object,
      default: () =>{}
    }
})
const previousTableData = ref([])
const operationTableData = ref([])
const traumaTableData = ref([])
const transfusionTableData = ref([])
</script>

<template>
  <el-form :model="formData" :inline="true" label-width="120px" label-position="left">
    <div class="record_test">
      <baseTitle title="档案基本信息" />
      <el-form-item label="档案归属地区" label-width="120px">
        <!-- {{ formData.area || '暂无数据' }} -->
        暂无数据
      </el-form-item>
      <el-form-item label="档案管理单位" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="建档医生" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="责任医生" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="现居住地" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="户口类型" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="是否流动人员" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="建档日期" label-width="120px">
        默认机构所在区划
      </el-form-item>
    </div>
    <div class="family_message">
      <baseTitle title="家庭基本信息" />
      <el-form-item label="家庭档案编号" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="户主姓名" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="与户主关系" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="是否签约家医" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="成员个数" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="家庭档案状态" label-width="120px">
        默认机构所在区划
      </el-form-item>
    </div>
    <div class="person_message">
      <baseTitle title="档案基本信息" />
      <el-form-item label="姓名" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="性别" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="出生日期" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="身份证号" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="档案编号" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="户籍地址" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="工作单位" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="本人电话" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="联系人姓名" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="联系人电话" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="常住类型" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="民族" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="血型" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="RH" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="文化程度" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="职业" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="婚姻状况" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="人员属性" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="血型" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="RH" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="文化程度" label-width="120px">
        默认机构所在区划
      </el-form-item>
      <el-form-item label="职业" label-width="120px">
        默认机构所在区划
      </el-form-item>
    </div>
    <div class="base_message">
      <div class="base_message_main">
        <baseTitle title="基本信息" />
        <el-form-item label="医疗费用支付方式" class="pay_type" label-width="120px">
          默认机构所在区划
        </el-form-item>
        <el-form-item label="药物过敏史" label-width="120px">
          默认机构所在区划
        </el-form-item>
        <el-form-item label="暴露史" label-width="120px">
          默认机构所在区划
        </el-form-item>
      </div>
      <div class="base_message_previous history">
        <baseTitle
          title="既往疾病史"
          :width="6"
          :height="6"
          :borderRadius="50"
        />
        <el-table
          :data="previousTableData"
          :empty-text="'暂无数据'"
          border
          size="small"
          height="240"
          style="width: 885px"
          :cell-style="{ textAlign: 'center' }"
          :header-cell-style="{ 
          background:'#F2F6FB',color:'#404F64','text-align': 'center'}">
        >
          <el-table-column prop="date" label="名称" width="295" />
          <el-table-column prop="name" label="时间" width="295" />
          <el-table-column prop="address" label="具体内容" width="295" />
        </el-table>
      </div>
      <div class="base_message_operation history">
        <baseTitle title="手术史" :width="6" :height="6" :borderRadius="50" />
        <el-table
          :data="operationTableData"
          :empty-text="'暂无数据'"
          border
          size="small"
          height="240"
          style="width: 885px"
          :cell-style="{ textAlign: 'center' }"
          :header-cell-style="{ 
          background:'#F2F6FB',color:'#404F64','text-align': 'center'}">
        >
          <el-table-column prop="date" label="名称" width="442.5" />
          <el-table-column prop="name" label="时间" width="442.5" />
        </el-table>
      </div>
      <div class="base_message_trauma history">
        <baseTitle title="外伤史" :width="6" :height="6" :borderRadius="50" />
        <el-table
          :data="traumaTableData"
          :empty-text="'暂无数据'"
          border
          size="small"
          height="240"
          style="width: 885px"
          :cell-style="{ textAlign: 'center' }"
          :header-cell-style="{ 
          background:'#F2F6FB',color:'#404F64','text-align': 'center'}">
        >
          <el-table-column prop="date" label="名称" width="442.5" />
          <el-table-column prop="name" label="时间" width="442.5" />
        </el-table>
      </div>
      <div class="base_message_transfusion history">
        <baseTitle title="输血史" :width="6" :height="6" :borderRadius="50" />
        <el-table
          :data="transfusionTableData"
          :empty-text="'暂无数据'"
          border
          size="small"
          height="240"
          style="width: 885px"
          :cell-style="{ textAlign: 'center' }"
          :header-cell-style="{ 
          background:'#F2F6FB',color:'#404F64','text-align': 'center'}">
        >
          <el-table-column prop="date" label="名称" width="442.5" />
          <el-table-column prop="name" label="时间" width="442.5" />
        </el-table>
      </div>
    </div>
    <div class="family_history">
      <baseTitle title="家族史" />
      <div class="history_father family">
        <baseTitle
        title="父亲"
        :showLine="false"
        :width="6"
        :height="6"
        :borderRadius="50"
      />
      <div class="history_text">
        高血压、糖尿病、冠心病、结核病
      </div>
      </div>
      <div class="history_mother">
        <baseTitle
        title="母亲"
        :showLine="false"
        :width="6"
        :height="6"
        :borderRadius="50"
      />
      <div class="history_text">
        高血压、糖尿病、冠心病、结核病
      </div>
      </div>
      <div class="history_brother">
        <baseTitle
        title="兄弟姐妹"
        :showLine="false"
        :width="6"
        :height="6"
        :borderRadius="50"
      />
      <div class="history_text">
        高血压、糖尿病、冠心病、结核病
      </div>
      </div>
      <div class="history_children">
        <baseTitle
        title="子女"
        :showLine="false"
        :width="6"
        :height="6"
        :borderRadius="50"
      />
      <div class="history_text">
        高血压、糖尿病、冠心病、结核病
      </div>
      </div>
    </div>
  </el-form>
</template>

<style scoped lang="scss">
.base_title {
  margin-top: 27px;
  margin-bottom: 27px;
  width: 895px;
}
:deep(.el-form-item__content) {
  width: 170px;
}
.el-form--inline .el-form-item {
  margin-left: 40px;
  margin-right: 120px;
  font-size: 16px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 700;
  color: #414F64;
}
.pay_type   {
  :deep(.el-form-item__label) {
    white-space: nowrap;
  }
}
.history {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.history_text {
    margin-top: 30px;
    margin-left: 35px;
}
</style>
