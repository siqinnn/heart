import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//让外部引用vuex
import store1 from './store1.js'
export default new Vuex.Store({
  modules: {
    storeModule1: store1
  },
  state: {
    withoutModule: 'withoutModule'
  },
  
})
