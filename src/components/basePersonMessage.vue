<script setup lang="ts">
import baseTitle from "./baseTitle.vue";
import {  onMounted, ref } from "vue";
import {
  getSex,
  filterNation,
  filterBloodType,
  filterRH,
  filterEducation,
  filterOccupation,
  filterMaritalStatus,
  filterPersonAttributes,
  filterMedicalPayment,
  filterDrugAllergyHistory,
  filterExposureHistory,
  filterDiseaseName,
  filterFamilyDiseaseName
} from "@/utils/filter/filterMore";
const props = defineProps({
  formData: {
    type: Object,
    default: () => {},
  },
});
let previousTableData = ref([]);
let operationTableData = ref([]);
let traumaTableData = ref([]);
let transfusionTableData = ref([]);
onMounted(() => {
  previousTableData = props.formData.healthDiseases
  operationTableData = props.formData.healthSurgeries
  traumaTableData = props.formData.healthTraumas
  transfusionTableData = props.formData.healthTraBloods
})
</script>

<template>
  <el-form
    :model="formData"
    :inline="true"
    label-width="120px"
    label-position="left"
  >
    <div class="record_test">
      <baseTitle title="档案基本信息" />
      <el-form-item label="档案归属地区" label-width="120px">
        {{ formData.areasAddressName || ""
        }}{{ formData.areadsAddressName || ""
        }}{{ formData.areaqxAddressName || ""
        }}{{ formData.areajdAddressName || ""
        }}{{ formData.areajwAddressName || "" }}
      </el-form-item>
      <el-form-item label="档案管理单位" label-width="120px">
        {{ formData.orgName || "暂无数据" }}
      </el-form-item>
      <el-form-item label="建档医生" label-width="120px">
        {{ formData.recUser || "暂无数据" }}
      </el-form-item>
      <el-form-item label="责任医生" label-width="120px">
        {{ formData.resDoctor || "暂无数据" }}
      </el-form-item>
      <el-form-item label="现居住地" label-width="120px">
        {{ formData.presentjdAddressName || "暂无数据"
        }}{{ formData.presentjdAddressCode }}
      </el-form-item>
      <el-form-item label="户口类型" label-width="120px">
        {{ formData.accountType === "1" ? "城镇" : "农村" || "暂无数据" }}
      </el-form-item>
      <el-form-item label="是否流动人员" label-width="120px">
        {{ formData.areadsAddressName || "暂无数据" }}
      </el-form-item>
      <el-form-item label="建档日期" label-width="120px">
        {{ formData.migrants === "1" ? "是" : " 否" || "暂无数据" }}
      </el-form-item>
    </div>
    <div class="family_message">
      <baseTitle title="家庭基本信息" />
      <el-form-item label="家庭档案编号" label-width="120px">
        {{ formData.familyno || "暂无数据" }}
      </el-form-item>
      <el-form-item label="户主姓名" label-width="120px">
        {{ formData.hzxm || "暂无数据" }}
      </el-form-item>
      <el-form-item label="与户主关系" label-width="120px">
        {{ formData.areadsAddressName || "暂无数据" }}
      </el-form-item>
      <el-form-item label="是否签约家医" label-width="120px">
        {{ formData.familyDoctor === "1" ? "是" : "否" || "暂无数据" }}
      </el-form-item>
      <el-form-item label="成员个数" label-width="120px">
        {{ formData.cygs || "暂无数据" }}
      </el-form-item>
      <el-form-item label="家庭档案状态" label-width="120px">
        {{ formData.jtdazt || "暂无数据" }}
      </el-form-item>
    </div>
    <div class="person_message">
      <baseTitle title="档案基本信息" />
      <el-form-item label="姓名" label-width="120px">
        {{ formData.name || "暂无数据" }}
      </el-form-item>
      <el-form-item label="性别" label-width="120px">
        {{ getSex(formData.sex) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="出生日期" label-width="120px">
        {{ formData.birthday || "暂无数据" }}
      </el-form-item>
      <el-form-item label="身份证号" label-width="120px">
        {{ formData.idcNo || "暂无数据" }}
      </el-form-item>
      <el-form-item label="档案编号" label-width="120px">
        {{ formData.docId || "暂无数据" }}
      </el-form-item>
      <el-form-item label="户籍地址" label-width="120px">
        {{ formData.permanentAddressDetail || "暂无数据" }}
      </el-form-item>
      <el-form-item label="工作单位" label-width="120px">
        {{ formData.workUnit || "暂无数据" }}
      </el-form-item>
      <el-form-item label="本人电话" label-width="120px">
        {{ formData.tel || "暂无数据" }}
      </el-form-item>
      <el-form-item label="联系人姓名" label-width="120px">
        {{ formData.contact || "暂无数据" }}
      </el-form-item>
      <el-form-item label="联系人电话" label-width="120px">
        {{ formData.contactTel || "暂无数据" }}
      </el-form-item>
      <el-form-item label="常住类型" label-width="120px">
        {{ formData.residentFlag === "1" ? "户籍" : "非户籍" || "暂无数据" }}
      </el-form-item>
      <el-form-item label="民族" label-width="120px">
        {{ filterNation(formData.Nation) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="血型" label-width="120px">
        {{ filterBloodType(formData.bloodGroup) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="RH" label-width="120px">
        {{ filterRH(formData.rhType) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="文化程度" label-width="120px">
        {{ filterEducation(formData.eduLevel) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="职业" label-width="120px">
        {{ filterOccupation(formData.profession) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="婚姻状况" label-width="120px">
        {{ filterMaritalStatus(formData.marStatus) || "暂无数据" }}
      </el-form-item>
      <el-form-item label="人员属性" label-width="120px">
        {{ filterPersonAttributes(formData.personAttributes )|| "暂无数据" }}
      </el-form-item>
    </div>
    <div class="base_message">
      <div class="base_message_main">
        <baseTitle title="基本信息" />
        <el-form-item
          label="医疗费用支付方式"
          class="pay_type"
          label-width="120px"
        >
        {{ filterMedicalPayment(formData.payTypes) || "暂无数据" }}
        </el-form-item>
        <el-form-item label="药物过敏史" label-width="120px">
          {{ filterDrugAllergyHistory(formData.drugAllergys) || "暂无数据" }}
        </el-form-item>
        <el-form-item label="暴露史" label-width="120px">
          {{ filterExposureHistory(formData.exposures) || "暂无数据" }}
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
            background: '#F2F6FB',
            color: '#404F64',
            'text-align': 'center',
          }"
        >
          <el-table-column  label="名称" width="295" >
            <template #default="scope">
              {{ filterDiseaseName(scope.row.diseaseName)}}
            </template>
          </el-table-column> 
          <el-table-column prop="diseaseDate" label="时间" width="295" />
          <el-table-column prop="diseaseDetail" label="具体内容" width="295" />
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
            background: '#F2F6FB',
            color: '#404F64',
            'text-align': 'center',
          }"
        >
          <el-table-column prop="surgeryName" label="名称" width="442.5" />
          <el-table-column prop="surgeryDate" label="时间" width="442.5" />
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
            background: '#F2F6FB',
            color: '#404F64',
            'text-align': 'center',
          }"
        >
          <el-table-column prop="traumaName" label="名称" width="442.5" />
          <el-table-column prop="traumaDate" label="时间" width="442.5" />
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
            background: '#F2F6FB',
            color: '#404F64',
            'text-align': 'center',
          }"
        >
          <el-table-column prop="traBlood" label="名称" width="442.5" />
          <el-table-column prop="traBloodDate" label="时间" width="442.5" />
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
        <div class="history_text">{{ filterFamilyDiseaseName(formData.fhFathers) || '暂无数据'}}</div>
      </div>
      <div class="history_mother">
        <baseTitle
          title="母亲"
          :showLine="false"
          :width="6"
          :height="6"
          :borderRadius="50"
        />
        <div class="history_text">{{ filterFamilyDiseaseName(formData.fhMathers) || '暂无数据'}}</div>
      </div>
      <div class="history_brother">
        <baseTitle
          title="兄弟姐妹"
          :showLine="false"
          :width="6"
          :height="6"
          :borderRadius="50"
        />
        <div class="history_text">{{ filterFamilyDiseaseName(formData.fhBss) || '暂无数据'}}</div>
      </div>
      <div class="history_children">
        <baseTitle
          title="子女"
          :showLine="false"
          :width="6"
          :height="6"
          :borderRadius="50"
        />
        <div class="history_text">{{ filterFamilyDiseaseName(formData.fhChilds) || '暂无数据'}}</div>
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
  color: #414f64;
}
.pay_type {
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
