<template>
  <div id="app">
    <div>
      <!-- <p>使用路由name属性跳转</p> -->

      <button
        v-for="(name,index) of nameList"
        :key="name"
        @click="Route(name,index)"
        :class="{bianse:isbianse==index}"
      >{{name}}</button>
      <router-view></router-view>
    </div>

    <!-- <div>
      <p>使用路由path属性跳转</p>
      <button
        v-for='path of pathList'
        :key='path'
        @click="Route2(path)"
      >{{path}}</button>
    </div>-->

    <!-- 展示路由 跳别的页面   子路由的内容输出窗口 -->

    
  </div>
</template>

<script>

import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";
import { finished } from "stream";
export default {
  name: "app",
  
  data() {
    return {
      nameList: ["html", "css", "js", "vue","practice","echarsgr","GluttonousSnake"],
     // pathList: ["/css", "/js", "/route", "/vuex"],
     
      isbianse: true
    };
  },
  methods: {
    // 使用路由name属性跳转
    Route(name, index) {
      this.$router.push({ name: name });
      this.isbianse =index;
    },
   

    // 使用路由path属性跳转
    // Route2(path) {
    //   this.$router.push({ path: path });
    // }
  }
};
</script>
<style src="./components/all.css">
</style>

