// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

// 导入 vue-resource
import VueResource from "vue-resource";
// 安装 vue-resource
Vue.use(VueResource);
// 设置请求的根路径
Vue.http.options.root = "http://localhost:3000/";
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

import "../src/lib/flexible.min.js";
// 按需导入 mint-ui
import { Swipe, SwipeItem, Tabbar, TabItem, Popup } from "mint-ui";
// 加载 mint-ui
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
import "mint-ui/lib/style.css";

// 导入 MUI 样式
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
import "./lib/mui/css/expand.less";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
