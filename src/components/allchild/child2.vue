<template>
  <div id="child2">
    我是child2
    <div>
      <h3>vuex</h3>
      <!-- <button @click="changeStore">点击</button> -->
      {{counts}}
      <!-- <br> {{use_getters_count}} -->
    </div>
  
   
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log("beforeRouteUpdate");
    next();
  },
  data() {
    return {};
  },
  methods: {
    
   
    // changeStore: function() {
    //   // 使用 $store.commit('increment') 来触发store1.js文件里 mutations 中的 increment 方法。
    //   // 表示一种改变state的action触发
    //   this.$store.commit("increment");
    // },

    // 将 `this.changeStore()` 映射为 `this.$store.commit('increment')`
    ...mapMutations({
      changeStore: "increment"
    })
  },
  // computed 为将计算属性将被混入到 Vue 实例中。
  // 所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
  computed: {
    counts() {
      return this.$store.state.storeModule1.counts;
    },
    // use_getters_count() {  // 类似getter、setter，函数名即为对应的实例属性
    //   return this.$store.getters.use_getters_count;
    // },
    // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    ...mapGetters(["use_getters_count"])  // 表示从stroe获取状态，可以直接作为属性变量使用
  }
};
</script>
<style scoped>

</style>