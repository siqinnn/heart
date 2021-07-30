import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    counts: 2,
    arraylist: [],
    todos: [{
      id: 1,
      name: 'todo1'
    }, {
      id: 0,
      name: 'todo0'
    }]
  },
  getters: {
    // use_getters_count(state) { //这里的state对应着上面这个state
    //   return 'use_getters：' + state.counts;
    // },
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // }
  },
  // Mutation 必须是同步函数
  mutations: { // commit
    // increment(state, data) { //这里的state对应着上面这个state
    //   // console.log(data.data)  // data也可以是对象
    //   state.counts++
    //   //你还可以在这里执行其他的操作改变state
    // }
  //   payload(state, action) {
  //     if (action.type) {
  //         state[action.type] = action.value;
  //     } else {
  //         for (let type in action) {
  //             state[type] = action[type];
  //         }
  //     }
  // }
  changedata1(state,pro) {
    state.arraylist = [{
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }]
    return pro=state.arraylist


  }
  },
  actions: { // dispatch
    // changeCount(context, data) { //这里的context和我们使用的$store拥有相同的对象和方法
    //   // console.log(context) 
    //   // console.log(data)
    //   context.commit('increment', data);
    //   //你还可以在这里触发其他的mutations方法
    // },
    changedata(context,pro) {
      context.commit('changedata1',pro )

    }
  },
})