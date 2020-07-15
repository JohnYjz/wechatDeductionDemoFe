# 微信扣费服务demo-fe

## 技术栈

``` bash
框架：vue + vue-router + vuex
UI库：weUI
```

## 启动

``` bash
# 安装项目依赖，建议用cnpm
npm install

# 项目启动 localhost:8080
npm run dev
```
## 项目结构

``` bash
build/
config/
node_modules/
src/
  api/            接口
  components/     组件
  constant/       常量定义
  router/         路由配置
  style/          样式
  utils/          工具
  webstore/       vuex的数据模块，用户的个人信息存放
  webviews/       页面组件
  app.vue
  main.js
```

## 设计文档

该项目分为7个页面
1、已开通的扣费服务列表页/，对应项目中 src/webviews/List.vue，其组件状态设orderState === 'valid'
2、已关闭的扣费服务列表页/CloseList，复用 src/webviews/List.vue，其组件状态设orderState === 'close'
3、扣费服务详情页/Detail，对应项目中 src/webviews/Detail.vue
4、扣费记录列表页/RecordList，该页面新增一个手动扣款mock提交，对应项目中 src/webviews/RecordList.vue
5、扣费渠道修改页/DeductionWay，对应项目中 src/webviews/DeductionWay.vue
6、新增扣费服务页面/Create，原型中没有，这里增加该页面用来验证数据，对应项目中 src/webviews/Create.vue
7、错误提示页/Error，登录信息错误会跳转拿到该页面，对应项目中 src/webviews/Error.vue

请输入localhost:8080/ 进入首页验证跳转逻辑

关于登录：
为了精简项目，该项目的登录用mock方式获得。
进入页面后会先请求一个user/info接口获得用户信息，该接口服务端采用mock的方式一定会返回一个用户信息，前端用该用户信息设置userId即登录成功

