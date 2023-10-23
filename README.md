# Vue 3 + TypeScript + Vite

本框架提供main分支版本


## 技术体系
- 核心：TypeScript5.2.2 + VueJS3.2.47 + VueRouter4.2.5 + Pinia2.1.7
- UI：Element-Plus2.1.0
- 构建系统：Vite4.4.11（插件按需下载）
- HTTP请求：Fetch
- 依赖管理：npm

## 目录规划
```js
|- dist // 构建成果
|- public
|- src
  |- api // api接口管理
  |- assets  // 静态资源
  |- components // 全局组件
  |- config // 全局配置
  |- directives // 全局指令
  |- enums // 枚举值
  |- hooks // 全局hooks，用于抽离公用逻辑
  |- layouts // 布局组件
  |- plugins // 第三方插件
  |- router  // 路由
  |- store   // 状态
  |- types   // 类型声明
  |- utils   // 工具函数
  |- views   // 页面
  |- App.vue  // 根组件
  |- main.ts
|- index.html // 入口页面
```

## 使用说明
``` bash
# 安装依赖
npm install
# 或
cnpm run dev

# 开发环境启动
npm run dev

# 生产环境打包
npm run build

```


## 主要功能
- [x]医疗机构档案管理

### 基础功能
- [x] 框架目录统一规划
- [x] UI框架集成
- [x] 路由管理集成
- [x] 状态管理集成
- [x] 数据请求、拦截器、接口鉴权、API管理
- [x] 用户登录验证、路由拦截器
- [x] 路由、动态菜单、资源按钮
- [x] 跨域代理、多环境支持
- [x] 常用工具函数和组件
- [x] css预处理器支持及主题颜色更改
- [x] 字体图标支持

### 性能优化
- [x] Gzip压缩支持
- [x] 按需加载和依赖分包并行加载支持
- [x] 重复请求取消支持

### 开发规范
- [x] ESlint
- [x] 开发规范文档
- [x] Git分支策略
- [x] API接口约定

### 布局组件
- [x] 头部组件
- [x] 导航菜单
- [x] 工作区