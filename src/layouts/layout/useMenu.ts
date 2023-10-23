import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
//导入菜单项的接口
import { INavMenu } from "@/types/interface/menu";
//导出导航菜单项
export const useMenu = () => {
  const menuItems:INavMenu[] = [
    {
      url: "/residentHealth",
      name: "档案管理",
      icon: Document,
    },
    {
      url: "/recordLocation",
      name: "档案位置",
      icon: Location,
    },
    {
      url: "/recordTotal",
      name: "档案统计",
      icon: Setting,
    },
  ];
  //返回导航菜单项
  return {
    menuItems,
  }
};

