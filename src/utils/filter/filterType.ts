//封装筛选个人人员属性的方法
import {PersonCardType} from "@/types/interface/health";
//颜色随机
// const getRandomColor = () => {
//   return (
//     "#" +
//     ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
//   );
// }
export const filterTypeList = (obj:PersonCardType) => {
  const result = [];
  if(obj.bigGanglion === "1"){
    result.push({
      text:"大",
      color:'#eabcca'
    });
  }
  if(obj.brucella === "1"){
    result.push({
      text:"布",
      color:'#e5e5e5'
    });
  }
  if(obj.child === "1"){
    result.push({
      text:"儿",
      color:'#f3c7c7'
    });
  }
  if(obj.coronary === "1"){
    result.push({
      text:"冠",
      color:'#5eb6c0'
    });
  }
  if(obj.deformed === "1"){
    result.push({
      text:"糖",
      color:'#FF5733'
    });
  }
  if(obj.dentalFluorosis === "1"){
    result.push({
      text:"氟",
      color:'#C70039'
    });
  }
  if(obj.echinococcosis === "1"){
    result.push({
      text:"包",
      color:'#900C3F'
    });
  }
  if(obj.familyDoctor === "1"){
    result.push({
      text:"家",
      color:'#581845'
    });
  }
  if(obj.generalPopulation === "1"){
    result.push({
      text:"一",
      color:'#FFC300'
    });
  }
  if(obj.hypertension === "1"){
    result.push({
      text:"高",
      color:'#DAF7A6'
    });
  }
  if(obj.iodine === "1"){
    result.push({
      text:"碘",
      color:'#FFC300'
    });
  }
  if(obj.maternal === "1"){
    result.push({
      text:"孕",
      color:'#FF5733'
    });
  }
  if(obj.mentalDisorder === "1"){
    result.push({
      text:"精",
      color:'#C70039'
    });
  }
  if(obj.migrants === "1"){
    result.push({
      text:"流",
      color:'#900C3F'
    });
  }
  if(obj.obstructiveLung === "1"){
    result.push({
      text:"慢",
      color:'#FFC300'
    });
  }
  if(obj.oldPeople === "1"){
    result.push({
      text:"老",
      color:'#581845'
    });
  }
  if(obj.pulmonaryHeart === "1"){
    result.push({
      text:"肺",
      color:'#DAF7A6'
    });
  }
  if(obj.rheumatism === "1"){
    result.push({
      text:"风",
      color:'#FFC300'
    });
  }
  if(obj.rheumatoid === "1"){
    result.push({
      text:"类",
      color:'#FF5733'
    });
  }
  if(obj.tuberculosis === "1"){
    result.push({
      text:"肺",
      color:'#C70039'
    });
  }
  return result;
};
