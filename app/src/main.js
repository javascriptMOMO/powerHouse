import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import BaiduMap from "vue-baidu-map";
Vue.config.productionTip = false;

Vue.use(BaiduMap, {
  ak: "YhuRIj2eFbFKRxvhU2Gi2dE68HR0i6o0" //这个地方是官方提供的ak密钥
});
Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
