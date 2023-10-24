//封装个根据出生年月日计算年龄的方法
export const getAge = (birthday: string) => {
    if (!birthday) {
          return ""; // 如果birthday为undefined，则返回空字符串
        }
        const today = new Date();
        const birthDate = new Date(birthday.replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3"));
        
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
  };