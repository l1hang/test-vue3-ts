//筛选人员属性的方法(圆圈)
export const filterAttribute = (personAttributes: string) => {
    const result = [];
    if(personAttributes){
      const personAttributesList = personAttributes.split(",");
      if (personAttributesList.includes("1")) {
        result.push({
          text: "一",
          color: "#eabcca",
        });
      }
      if (personAttributesList.includes("2")) {
        result.push({
          text: "高",
          color: "#e5e5e5",
        });
      }
      if (personAttributesList.includes("3")) {
        result.push({
          text: "糖",
          color: "#f3c7c7",
        });
      }
      if (personAttributesList.includes("4")) {
        result.push({
          text: "精",
          color: "#5eb6c0",
        });
      }
      if (personAttributesList.includes("5")) {
        result.push({
          text: "肺",
          color: "#FF5733",
        });
      }
      if (personAttributesList.includes("6")) {
        result.push({
          text: "儿",
          color: "#C70039",
        });
      }
      if (personAttributesList.includes("7")) {
        result.push({
          text: "老",
          color: "#900C3F",
        });
      }
      if (personAttributesList.includes("8")) {
        result.push({
          text: "孕",
          color: "#581845",
        });
      }
      if (personAttributesList.includes("9")) {
        result.push({
          text: "慢",
          color: "#FFC300",
        });
      }
      if (personAttributesList.includes("10")) {
        result.push({
          text: "风",
          color: "#DAF7A6",
        });
      }
      if (personAttributesList.includes("11")) {
        result.push({
          text: "类",
          color: "#FFC300",
        });
      }
      if (personAttributesList.includes("12")) {
        result.push({
          text: "心",
          color: "#FF5733",
        });
      }
      if (personAttributesList.includes("13")) {
        result.push({
          text: "冠",
          color: "#C70039",
        });
      }
      if (personAttributesList.includes("14")) {
        result.push({
          text: "包",
          color: "#900C3F",
        });
      }
      if (personAttributesList.includes("15")) {
        result.push({
          text: "布",
          color: "#FFC300",
        });
      }
      if (personAttributesList.includes("16")) {
        result.push({
          text: "碘",
          color: "#581845",
        });
      }
      if (personAttributesList.includes("17")) {
        result.push({
          text: "大",
          color: "#DAF7A6",
        });
      }
      if (personAttributesList.includes("18")) {
        result.push({
          text: "氟",
          color: "#FFC300",
        });
      }
      if (personAttributesList.includes("19")) {
        result.push({
          text: "残",
          color: "#FF5733",
        });
      }
    }
    return result;
  };
//根据sex筛选性别
export const getSex = (sex: string) => {
    if (sex === "1") {
      return "男";
    } else if (sex === "2") {
      return "女";
    } else if (sex === "9") {
      return "未说明性别";
    } else if (sex === "0") {
      return "未知性别";
    }
  };
//筛选档案状态
export const filterStatus = (recordState:string) => {
    if(recordState === '1') {
      return '正常'
    }else if(recordState === '2') {
      return '迁出'
    }else if(recordState === '3') {
      return '死亡'
    }else if(recordState === '4') {
      return '注销'
    }else if(recordState === '5') {
      return '失访'
    }else if(recordState === '6') {
      return '临时'
    }
  }
//筛选民族
export const filterNation = (nation:string) => {
  if(nation === '01') {
    return '汉族'
  }
  if(nation === '02') {
    return '蒙古族'
  }
  if(nation === '03') {
    return '回族'
  }
  if(nation === '04') {
    return '藏族'
  }
  if(nation === '05') {
    return '维吾尔族'
  }
  if(nation === '06') {
    return '苗族'
  }
  if(nation === '07') {
    return '彝族'
  }
  if(nation === '08') {
    return '壮族'
  }
  if(nation === '09') {
    return '布依族'
  }
  if(nation === '10') {
    return '朝鲜族'
  }
  if(nation === '11') {
    return '满族'
  }
  if(nation === '12') {
    return '侗族'
  }
  if(nation === '13') {
    return '瑶族'
  }
  if(nation === '14') {
    return '白族'
  }
  if(nation === '15') {
    return '土家族'
  }
  if(nation === '16') {
    return '哈尼族'
  }
  if(nation === '17') {
    return '哈萨克族'
  }
  if(nation === '18') {
    return '傣族'
  }
  if(nation === '19') {
    return '黎族'
  }
  if(nation === '20') {
    return '傈僳族'
  }
  if(nation === '21') {
    return '佤族'
  }
  if(nation === '22') {
    return '畲族'
  }
  if(nation === '23') {
    return '高山族'
  }
  if(nation === '24') {
    return '拉祜族'
  }
  if(nation === '25') {
    return '水族'
  }
  if(nation === '26') {
    return '东乡族'
  }
  if(nation === '27') {
    return '纳西族'
  }
  if(nation === '28') {
    return '景颇族'
  }
  if(nation === '29') {
    return '柯尔克孜族'
  }
  if(nation === '30') {
    return '土族'
  }
  if(nation === '31') {
    return '达斡尔族'
  }
  if(nation === '32') {
    return '仫佬族'
  }
  if(nation === '33') {
    return '羌族'
  }
  if(nation === '34') {
    return '布朗族'
  }
  if(nation === '35') {
    return '撒拉族'
  }
  if(nation === '36') {
    return '毛南族'
  }
  if(nation === '37') {
    return '仡佬族'
  }
  if(nation === '38') {
    return '锡伯族'
  }
  if(nation === '39') {
    return '阿昌族'
  }
  if(nation === '40') {
    return '普米族'
  }
  if(nation === '41') {
    return '塔吉克族'
  }
  if(nation === '42') {
    return '怒族'
  }
  if(nation === '43') {
    return '乌孜别克族'
  }
  if(nation === '44') {
    return '俄罗斯族'
  }
  if(nation === '45') {
    return '鄂温克族'
  }
  if(nation === '46') {
    return '德昂族'
  }
  if(nation === '47') {
    return '保安族'
  }
  if(nation === '48') {
    return '裕固族'
  }
  if(nation === '49') {
    return '京族'
  }
  if(nation === '50') {
    return '塔塔尔族'
  }
  if(nation === '51') {
    return '独龙族'
  }
  if(nation === '52') {
    return '鄂伦春族'
  }
  if(nation === '53') {
    return '赫哲族'
  }
  if(nation === '54') {
    return '门巴族'
  }
  if(nation === '55') {
    return '珞巴族'
  }
  if(nation === '56') {
    return '基诺族'
  }
}
//筛选血型
export const filterBloodType = (bloodType:string) => {
  if(bloodType === '1') {
    return 'A型'
  }
  if(bloodType === '2') {
    return 'B型'
  }
  if(bloodType === '3') {
    return 'O型'
  }
  if(bloodType === '4') {
    return 'AB型'
  }
  if(bloodType === '5') {
    return '不详'
  }
}
//筛选RH
export const filterRH = (RH:string) => {
  if(RH === '1') {
    return '阴性'
  }
  if(RH === '2') {
    return '阳性'
  }
  if(RH === '3') {
    return '不详'
  }
}
//筛选文化程度
export const filterEducation = (education:string) => {
  if(education === '1') {
    return '研究生'
  }
  if(education === '2') {
    return '大学本科'
  }
  if(education === '3') {
    return '大学专科和专科学校'
  }
  if(education === '4') {
    return '中等专业学校'
  }
  if(education === '5') {
    return '技工学校'
  }
  if(education === '6') {
    return '高中'
  }
  if(education === '7') {
    return '初中'
  }
  if(education === '8') {
    return '小学'
  }
  if(education === '9') {
    return '文盲或半文盲'
  }
  if(education === '10') {
    return '不详'
  }

}
//筛选职业
export const filterOccupation = (occupation:string) => {
  if(occupation === '0') {
    return '国家机关、党群组织、企业、事业单位负责人员'
  }
  if(occupation === '1') {
    return '专业技术人员'
  }
  if(occupation === '2') {
    return '办事人员和有关人员'
  }
  if(occupation === '3') {
    return '商业、服务业人员'
  }
  if(occupation === '4') {
    return '农、林、牧、渔、水利业生产人员'
  }
  if(occupation === '5') {
    return '生产、运输设备操作人员及有关人员'
  }
  if(occupation === '6') {
    return '军人'
  }
  if(occupation === '7') {
    return '不便分类的其他从业人员'
  }
  if(occupation === '8') {
    return '无职业备操作人员'
  }
}
//筛选婚姻状况
export const filterMaritalStatus = (maritalStatus:string) => {
  if(maritalStatus === '1') {
    return '未婚'
  }
  if(maritalStatus === '2') {
    return '已婚'
  }
  if(maritalStatus === '3') {
    return '丧偶'
  }
  if(maritalStatus === '4') {
    return '离婚'
  }
  if(maritalStatus === '5') {
    return '未说明的婚姻状况'
  }
}
//筛选人员属性
export const filterPersonAttributes = (personAttributes:string) => {
  if(personAttributes === '1') {
    return '一般人群'
  }
  if(personAttributes === '2') {
    return '高血压'
  }
  if(personAttributes === '3') {
    return '糖尿病'
  }
  if(personAttributes === '4') {
    return '严重精神障碍'
  }
  if(personAttributes === '5') {
    return '肺结核'
  }
  if(personAttributes === '6') {
    return '儿童'
  }
  if(personAttributes === '7') {
    return '老年人'
  }
  if(personAttributes === '8') {
    return '孕产妇'
  }
  if(personAttributes === '9') {
    return '慢阻肺'
  }
  if(personAttributes === '10') {
    return '风湿'
  }
  if(personAttributes === '11') {
    return '类风湿'
  }
  if(personAttributes === '12') {
    return '肺心病'
  }
  if(personAttributes === '13') {
    return '冠心病'
  }
  if(personAttributes === '14') {
    return '包虫病'
  }
  if(personAttributes === '15') {
    return '布鲁氏杆菌'
  }
  if(personAttributes === '16') {
    return '碘缺乏'
  }
  if(personAttributes === '17') {
    return '大骨节'
  }
  if(personAttributes === '18') {
    return '氟斑牙'
  }
  if(personAttributes === '19') {
    return '残疾人'
  }
}
//筛选医疗费用支付方式
export const filterMedicalPayment = (medicalPayment:string) => {
  const result = [];
  if (medicalPayment) {
  const medicalPaymentList = medicalPayment.slice(1, -1).split(",").map(Number);
  if(medicalPaymentList.includes(1)) {
    result.push('城镇职工基本医疗保险')
  }
  if(medicalPaymentList.includes(2)) {
    result.push('城镇居民基本医疗保险')
  }
  if(medicalPaymentList.includes(3)) {
    result.push('新型农村合作医疗')
  }
  if(medicalPaymentList.includes(4)) {
    result.push('贫困救助')
  }
  if(medicalPaymentList.includes(5)) {
    result.push('商业医疗保险')
  }
  if(medicalPaymentList.includes(6)) {
    result.push('全公费')
  }
  if(medicalPaymentList.includes(7)) {
    result.push('全自费')
  }
  if(medicalPaymentList.includes(8)) {
    result.push('其他')
  }
}
  return result.join(',')
}
//筛选药物过敏史
export const filterDrugAllergyHistory = (drugAllergyHistory:string) => {
  //{无,青霉素,磺胺,链霉素,其他说明}
  const result = [];
  if (drugAllergyHistory) {
  const drugAllergyHistoryList = drugAllergyHistory.slice(1, -1).split(",").map(Number);
  if(drugAllergyHistoryList.includes(1)) {
    result.push('无')
  }
  if(drugAllergyHistoryList.includes(2)) {
    result.push('青霉素')
  }
  if(drugAllergyHistoryList.includes(3)) {
    result.push('磺胺')
  }
  if(drugAllergyHistoryList.includes(4)) {
    result.push('链霉素')
  }
  if(drugAllergyHistoryList.includes(5)) {
    result.push('其他说明')
  }
}
  return result.join(',')
}
//筛选暴露史
export const filterExposureHistory = (exposureHistory:string) => {
  const result = [];
  if (exposureHistory) {
  const exposureHistoryList = exposureHistory.slice(1, -1).split(",").map(Number);
  if(exposureHistoryList.includes(1)) {
    result.push('无')
  }
  if(exposureHistoryList.includes(2)) {
    result.push('化学品')
  }
  if(exposureHistoryList.includes(3)) {
    result.push('毒物')
  }
  if(exposureHistoryList.includes(4)) {
    result.push('射线')
  }
}
  return result.join(',')
}
//筛选疾病名称
export const filterDiseaseName = (diseaseName:string) => {
  const result = [];
  if (diseaseName) {
  const diseaseNameList = diseaseName.slice(1, -1).split(",").map(Number);
  if(diseaseNameList.includes(1)) {
    result.push('无')
  }
  if(diseaseNameList.includes(2)) {
    result.push('高血压')
  }
  if(diseaseNameList.includes(3)) {
    result.push('糖尿病')
  }
  if(diseaseNameList.includes(4)) {
    result.push('冠心病')
  }
  if(diseaseNameList.includes(5)) {
    result.push('慢性阻塞性肺疾病')
  }
  if(diseaseNameList.includes(6)) {
    result.push('恶性肿瘤')
  }
  if(diseaseNameList.includes(7)) {
    result.push('脑卒中')
  }
  if(diseaseNameList.includes(8)) {
    result.push('严重精神障碍')
  }
  if(diseaseNameList.includes(9)) {
    result.push('结核病')
  }
  if(diseaseNameList.includes(10)) {
    result.push('肝炎')
  }
  if(diseaseNameList.includes(11)) {
    result.push('其他法定传染病')
  }
  if(diseaseNameList.includes(12)) {
    result.push('职业病')
  }
  if(diseaseNameList.includes(13)) {
    result.push('其他')
  }

}
  return result.join(',')
}
//筛选家族史疾病名称
export const filterFamilyDiseaseName = (diseaseName:string) => {
  const result = [];
  if (diseaseName) {
    const diseaseNameList = diseaseName.slice(1, -1).split(",").map(Number);
    if(diseaseNameList.includes(1)) {
      result.push('无')
    }
    if(diseaseNameList.includes(2)) {
      result.push('高血压')
    }
    if(diseaseNameList.includes(3)) {
      result.push('糖尿病')
    }
    if(diseaseNameList.includes(4)) {
      result.push('冠心病')
    }
    if(diseaseNameList.includes(5)) {
      result.push('慢性阻塞性肺疾病')
    }
    if(diseaseNameList.includes(6)) {
      result.push('恶性肿瘤')
    }
    if(diseaseNameList.includes(7)) {
      result.push('脑卒中')
    }
    if(diseaseNameList.includes(8)) {
      result.push('严重精神障碍')
    }
    if(diseaseNameList.includes(9)) {
      result.push('结核病')
    }
    if(diseaseNameList.includes(10)) {
      result.push('肝炎')
    }
    if(diseaseNameList.includes(11)) {
      result.push('先天畸形')
    }
    if(diseaseNameList.includes(12)) {
      result.push('其他')
    }
  }
  return result.join(',')
}