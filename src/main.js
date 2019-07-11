import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import echarts from 'echarts'
import directives from './directive';
import VueResource from 'vue-resource'

// import globalquanju from '@/quanju.js'   //引入全局
// Vue.prototype.GLOBAL=globalquanju   //挂载实例
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.directive('focus', directives.focusd)
Vue.directive('drag', directives.drag)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts







new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')