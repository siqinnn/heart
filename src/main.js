import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import directives from './directive';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
// import globalquanju from '@/quanju.js'   //引入全局
// Vue.prototype.GLOBAL=globalquanju   //挂载实例
// 在标签内添加 v-testDirective
Vue.directive('focus', directives.focus)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
