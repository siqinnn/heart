<template id="hot">
  <div class="home">
    <div class="new">
      <div class="shijiu">
        <p class="heiha">1.怎么用vue-cli新建 vue 3.0项目。弄清新建的时候，各个选项是什么，干什么用；</p>(1)在桌面创建新文件夹，且用vscode打开
        <br />(2)Ctrl+·命令打开终端，
        <br />(3)npm install -g @vue/cli 下载脚手架-----如果下载过无需再下载
        <br />(4)npm install yarn -g 下载包管理工具-----如果下载过无需再下载
        <br />(5)vue create my-project 创建项目
        <br />(6)npm project 项目名-一系列操作
        <br />(7)cd 项目名 进入当前目录
        <br />(8)npm run serve 启动项目
        <br />(9)“start”：“vue-cli-service serve --open --port 2342” 配置文件内改变方式
        <br />(10)npm start 运行到浏览器
      </div>
      <div class="shijiu">
        <p class="heiha">2.怎么写路由，及路由的使用；写一个三级嵌套的路由，模块化的使用；</p>(a)路由就是指向，比如点击home就显示home的内容，点击about就显示about的内容。
        <br />(b)路由有三个概念 route一个路由 routes一组路由 router一个机制：相当于管理者，它来管理路由， 作用就是，当点击home时从routes去寻找home。
        <br />
        (1)js中配置路由：（在router.js 文件内）首先要定义route，path：路径；component：组件； 比如说：const routes =[{path：‘/home’，component：‘Home’},]
        <br />
        (2)配置完场后，把router实例注入到vue根实例中即可使用路由。（main.js里）比如说：new Vue （{
        router
        }）.$mount(‘#app’)
        <br />
        (3)执行过程是：当用户点击router-link标签时，会寻找它的to属性，它的to属性和js中配置的路径{path：”/home “，component：‘Home’}path一一对应，找到匹配的组件，
        <br />(4)最后将组件渲染到router-view标签所在的地方，所有实现时基于hash实现的。
        <br />
        <div class="shijiu">
          <button v-for="name of nameList" :key="name" @click="Route(name)">{{name}}</button>
          <router-view />
        </div>
      </div>
      <div class="shijiu">
        <p class="heiha">3.怎么添加事件，添加样式，怎样绑定多个class，比如：一个固定的class，一个动态切换的class</p>事件绑定：
        <br />(1)
        <button @click="test1">test1</button>
        <br />(2)
        <button @click="test2('hello world')">test2</button>
        <br />(3)
        <button @click="test3()">test3</button>
        <br />(4)
        <button @click="test4('123',$event)">test4</button>

        <div class="dong">
          事件修饰符：
          <br />(1)
          <div style="width:200px;height:200px;background:gray;" @click="test5">
            <div style="width: 100px; height: 100px; background: blue;" @click.stop="test6"></div>
          </div>
        </div>
        <div class="dong">
          (2)
          <a href="http://www.baidu.com" @click.prevent="test7">百度</a>
        </div>
        <div class="dong1">
          添加样式：
          <br />(1)
          <div v-bind:class="{active:isActive}"></div>
        </div>
        <div class="dong1">
          动态切换class：
          <br />(2)
          <div class="white" :class="{white1:istrue}" @click="white"></div>
        </div>
      </div>
    </div>
    <div class="new">
      <div class="shijiu1">
        <p class="heiha">4.怎么添加子组件，以及父->子、子->父,组件间传数据、触发事件；动态切换组件；</p>1.父传子步骤
        <br />(1)新建子文件/子组件
        <br />(2)子组件中创建props，创建message属性
        <br />(3)在父组件中注册注册子组件，在template中加入child标签，标签中添加message属性并赋值message="parentmsg"
        <br />(4)保存，运行，子组件内输出内容
        <br />2.子传父步骤
        <br />(1)子组件中创建按钮，绑定点击事件
        <br />(2)点击事件函数用$emit触发自定义事件并传参，this.$emit("listentochild","this message is from child")
        <br />(3)在父组件子标签内监听自定义事件且添加响应该事件的处理方法，v-ov:listentochild="showmsgfromchild"
        <br />(4)在父组件中导入子组件 import child from '@/'
        <br />3.动态切换组件
        <br />
        (1)新建组件用于创建需要绑定点击事件的对象，添加点击事件，事件函数传参1，2，3，methods中添加事件
        事件（n）{this.$emit('hand',n)}
        <br />(2)在父组件内导入前面的组件，
        <br />(3)切换网页-- 《component :is="com"》《/component》与《tabb @hand="toggle"》
        <br />(4)return 内 comname："addcon""
        <br />
        (5)components:{addcon,listcon,mmmcon,tabbcon}
        <br />
        (6)methods内toggle（n）{switch语句添加页面，---this.comname="addcon"}
        <div class="fu">
          <child @clickkkkk="showchild" :duixiang="duixiang"></child>
        </div>
      </div>
      <div class="shijiu">
        <p class="heiha">5.生命周期都有哪些，常用的有哪些，各是什么意思及使用场景；</p>1.vue生命周期：
        <br />(1)beforeCreate(创建前)，在数据观测和初始化事件还未开始
        <br />(2)created(创建后)，完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来
        <br />(3)beforeMount(载入前)，在挂载开始之前被调用，相关的render函数首次被调用。
        实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。
        <br />(4)mounted（载入后），在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：
        用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。
        <br />(5)beforeUpdate（更新前），在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。
        可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。
        <br />(6)updated（更新后），在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，
        所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
        <br />(7)beforeDestroy（销毁前），在实例销毁之前调用。实例仍然完全可用。
        <br />(8)destroyed（销毁后），在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。
        <br />2.vue生命周期应用
        <br />(1)created:进行ajax请求异步数据的获取、初始化数据
        <br />(2)mounted:挂载元素dom节点的获取
        <br />(3)nextTick:针对单一事件更新数据后立即操作dom
        <br />(4)updated:任何数据的更新，如果要做统一的业务逻辑处理
        <br />(5)watch:监听数据变化，并做相应的处理
        3.生命周期做的事
        <br />(1)在beforeCreate和created钩子函数之间的生命周期
        <br />期间初始化事件，进行数据观测，数据已经与data绑定了。此时没el
        <br />(2)created钩子函数和beforeMount间的生命周期
        <br />判断对象是否有el选项。如果有的话就继续向下编译，如果没有el选项，则停止
        编译，也就停止了生命周期，直到在该vue实例上调用vm.$mount(el)。
        <br />(3) beforeMount和mounted 钩子函数间的生命周期
        <br />给vue实例对象添加$el成员，并且替换掉挂在的DOM元素。因为在之前
        console中打印的结果可以看到beforeMount之前el上还是undefined。
        <br />(4)mounted
        <br />在mounted之前还是通过message进行占位的，因为此时还有挂在到页面上，
        还是JavaScript中的虚拟DOM
        形式存在的。在mounted之后内容发生了变化。
        <br />(5)beforeUpdate钩子函数和updated钩子函数间的生命周期
        <br />当vue发现data中的数据发生了改变，会触发对应组件的重新渲染，先后调用
        beforeUpdate和updated钩子函数。
        <br />(6)beforeDestroy和destroyed钩子函数间的生命周期
        <br />beforeDestroy钩子函数在实例销毁之前调用。在这一步，实例仍然完全可用。
        destroyed钩子函数在Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
        所有的事件监听器会被移除，所有的子实例也会被销毁。
      </div>
      <div class="shijiu">
        <p class="heiha">6.数据的绑定显示，v-if、v-for、v-model、:class、:style；</p>(1)v-if: 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。
        <br />
        <div>
          <div v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input" />
          </div>
          <div v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input" />
          </div>
        </div>
        <button @click="liu1">v-if</button>
        <br />(2)v-for:循环，指令需要以 site in sites 形式的特殊语法， sites 是源数据数组并且 site 是数组元素迭代的别名。
        <br />
        <div v-for="site of sites" :key="site.id">{{site}}</div>
        <button @click="liu2">v-for</button>
        <br />(3)v-model:表单类元素上双向绑定数据,负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理
        <br />
        <input v-model="lolo" placeholder="编辑" />
        <p>{{lolo}}</p>
        <button @click="liu3">v-model</button>
        <br />(4):class: v-bind:class 一个对象，以动态地切换 class 。
        <br />

        <div class="white" :class="{white1:istrue}" @click="white"></div>

        <button>:class</button>
        <br />(5):style:v-bind:style---绑定内联样式
        <br />
        <div :style="[c]">我是变的：style</div>
        <button @click="liu5">:style</button>
        <br />
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">7.怎么引入axios，以及axios的使用，拦截器是什么；</p>axios是什么：
        <br />axios是基于promise（诺言）用于浏览器和node.js是http客户端。
        <br />axios的作用：
        <br />axios主要是用于向后台发起请求的，还有在请求中做更多是可控功能。
        <br />特点：
        <br />支持浏览器和node.js
        <br />支持promise
        <br />能拦截请求和响应
        <br />能转换请求和响应数据
        <br />能取消请求
        <br />自动转换JSON数据
        <br />浏览器支持防止CSRF（跨站请求伪造）
        <br />1.引入axios：
        <br />(1)下载安装 npm install axios --save
        <br />(2)在需要使用的文件内 import axios from 'axios'
        <br />
        <button @click="axios1">axios</button>
      </div>
      <div class="shijiu">
        <p class="heiha">8.自定义指令是什么，怎么用；</p>自定义指令：
        <br />自定义指令就是一种有效的补充和扩展，不仅可用于定义任何的DOM操作，并且是可复用的。
        比如谷歌图片的加载，在图片未完成加载前，用随机的背景色占位，图片加载完成后才直接渲染出来。
        用自定义指令可以非常方便的实现这个功能。
        <br />
        <input v-focus="{self:'self'}" type="text" placeholder="autoFocus" />
      </div>
      <div class="shijiu">
        <p class="heiha">9.vuex一般怎么写，怎么用，模块化的使用；</p>vuex是什么：
        <br />vuex是一个管理者，管理的方式是集中式管理，管理的对象即是vue.js应用程序中的众多组件的共享部分
        <br />用法：
        <br />(1)安装vuex npm install vuex --save
        <br />(2)在main.js中引入vuex import vuex from 'vuex'
        <br />
        (3)使用vuex Vue.use(vuex); var store = new vuex.Store({创建vuex中的store对象state})
        <br />(4)随后在实例化Vue对象时，加入store对象：
        <div>
          <router-link to="/vue/child1" class="setRouterLink">child1</router-link>
          <router-link to="/vue/child2" class="setRouterLink">child2</router-link>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="new">
      <div class="shijiu">
        <p class="heiha">10.引入第三方插件怎么写，比如用e-charts；</p>引入e-charts：
        <br />(1)初始化vue项目 vue init webpack echart,进入初始化的项目下。安装echarts，
        <br />(2)安装 npm install echarts -S
        <br />(3)或者 cnpm install echarts -S
        <br />(4)安装完成之后，引入需要的echarts，
        <br />(5)全局引用： 首先在main.js中引入echarts，将其绑定到vue原型上：
        <br />(6)import echarts from 'echarts'
        <br />(7)Vue.prototype.$echarts = echarts;
        <button @click="jjjjj">查看图表</button>
        <div style="width:500px;height:500px" ref="chart"></div>
      </div>
      <div class="shijiu">
        <p class="heiha">11.怎么用$set修改数据</p>
        <div>
          <p>数组变更检测</p>
          {{arr}}
          <button @click="testArr()">testArr</button>
        </div>
        <div>
          <p>对象变更检测</p>
          {{obj}}
          <button @click="testObj()">testObj</button>
        </div>
      </div>
      <div class="shijiu">
        <p class="heiha">12.写个鼠标移动事件，监听鼠标坐标，要去抖动，500ms；</p>
        <div class="drag" v-drag></div>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require("echarts");
//////////10.
import child from "@/components/child";

//import child1 from "@/components/smzq";
export default {
  data: {},
  components: {
    child
    // child1
  },

  data() {
    return {
      nameList: ["film", "tv", "music"],
      isActive: true,
      istrue: true,
      duixiang: {
        name: "我是爸爸111111"
      },
      loginType: "username",
      sites: [{ name: "bob" }, { name: "jerry" }, { name: "koko" }],
      lolo: "",
      isddd: true,
      c: { color: "red" },
      arr: ["a", "b", "c"],
      obj: {
        age: 40
      }
    };
  },
  mounted() {
    this.initCharts();
  },
  directives: {
    drag(el, binding) {
      el.onmousedown = function(e) {
        //onmousedown事件会在鼠标按键被按下时发生。
        var disx = e.pageX - el.offsetLeft;
        //pageX() 属性是鼠标指针的位置，相对于文档的左边缘。
        var disy = e.pageY - el.offsetTop;
        console.log(e.pageX);
        document.onmousemove = function(e) {
          el.style.left = e.pageX - disx + "px";
          el.style.top = e.pageY - disy + "px";
          console.log(el.style.left);
          console.log(el.style.top);
        };
        document.onmouseup = function() {
          //鼠标松开
          document.onmousemove = document.onmouseup = null;
        };
      };
    },
    
  },

  methods: {
    Route(name) {
      this.$router.push({ name: name });
    },
    test1: function() {
      console.log("test1");
    },
    test2: function(msg) {
      console.log(msg);
    },
    test3: function(event) {
      console.log(event.target.innerHTML);
    },
    test4: function(number, event) {
      console.log(number + "---" + event.target.innerHTML);
    },
    test5: function() {
      console.log("out");
    },
    //阻止事件冒泡
    test6: function() {
      //event.stopPropagation();
      console.log("inner");
    },
    test7: function() {
      //event.preventDefault();
      console.log("点击了");
    },
    white() {
      this.istrue = !this.istrue;
    },

    showchild(data) {
      console.log(data);
    },

    liu1() {
      let self = this;
      if (self.loginType === "username") {
        self.loginType = "";
      } else {
        self.loginType = "username";
      }
    },
    liu2(value) {
      console.log(value);
    },
    liu3() {},
    liu5() {},
    axios1() {
      this.$axios.get("/seller", { id: 123 }).then(res => {
        console.log(res.data);
      });
    },
    jjjjj() {
      this.$router.push({ name: "tv" });
    },
    initCharts() {
      let myChart = echarts.init(this.$refs.chart);
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      });
    },
    testArr() {
      //   this.arr[1] = "9"; // 不会触发变更检测
      //   Vue.set(this.arr, 1, "9");  // 可以触发变更检测，但需要在上边写import
      this.$set(this.arr, 2, "我是value值"); // 可以触发变更检测，不用写任何引入，用来修改数组，相应索引处的值（array,index,value）
      this.arr.push("push");
    },
    testObj() {
      // this.obj['job']='asdfdas';  // 不会触发变更检测
      this.$set(this.obj, "job", "9");
    }
    // getMousePos(event) {
    //   var e = event || window.event;
    //   var scrollX =
    //     document.documentElement.scrollLeft || document.body.scrollLeft;
    //   var scrollY =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   var x = e.pageX || e.clientX + scrollX;
    //   var y = e.pageY || e.clientY + scrollY;
    //   //	    return { 'x': x, 'y': y };
    //   console.log({ x: x, y: y });
    // }
  }
};
</script>
<style>
.gai {
  margin: 10px;
}
.setRouterLink {
  width: 150px;
  height: 30px;
  background: gray;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  border: 2px groove gainsboro;
  margin: 5px;
}
.drag {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 2160px;
  right: 400px;
  background-color: red;
  background: saddlebrown;
  background-size: cover;
}
</style>


































