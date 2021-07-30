<template>
  <div id="child1">
    我是child1
    <div>
      <h3>vuex</h3>
      <button @click="changeStore">点击(触发dispatch)</button>
      {{counts}}
      <!-- <br> {{getTodo}}<br>{{withoutModule}} -->
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    // 这里一般用来定义静态初始数据
    return {};
  },
  methods: {
    // 在组件中使用 this.$store.dispatch('xxx') 分发 action
    // changeStore: function() {
    //   // 使用 $store.dispatch('changeCount') 来触发store1.js文件里 actions 中的 changeCount 方法。
    //   // 官方推荐 , 将异步操作放在 action 中，用此方法，会给actions里的changeCount传递这里写的数据
    //   this.$store.dispatch("changeCount",{num:4});
    // },
    //  将 `this.changeStore()` 映射为 `this.$store.dispatch('changeCount')`;
    // 也可以直接写出触发 store.js 里 mutations 下的 increment 函数,data 可以是简单数据，也可以是对象
    // `this.$store.commit('increment', data);`

    ...mapActions({
      changeStore: "changeCount" // 这么用，会给actions里的changeCount传递event对象
    })
  },
  // 计算属性，计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值
  // 类似get、set 属性
  computed: {
    // 这里一般用来定义动态初始数据，函数名即为getter、setter属性
    // use_getters_count() {
    //   return this.$store.getters.use_getters_count;
    // },
    // // 通过传参函数获取状态值，动态读取counts
    // getTodo() {
    //   return this.$store.getters.getTodoById(this.counts % 2);
    // },
    ...mapState({
      // 只能用来直接读取数据
      counts: state => state.storeModule1.counts // 读取的是模块storeModule1
      // getTodo: state => state.storeModule1.todos[1]
    }),
    // 只能用来读取非模块的数据
    ...mapState(["withoutModule"])
  }
};
</script>
<style scoped>
/* scoped表示局部作用于样式 */

</style>