<template>
  <div class="home">
    <div class="new">
      <div>
        <p class="heiha">1.css选择器有哪些？选择器关系？</p>(1)标签选择器--p.div.ul.li
        <br />(2)类选择器--class="name"
        <br />(3)ID选择器--id="name"
        <br />(4)伪类选择器--a.link.visitid.active
        <br />(4)伪选择器--before.after
        <br />(5)全局选择器--*号
        <br />(6)继承选择器--父级 子集 div kk
        <br />(7)选择器关系：
        <br />！important>内联>id>class>
        <br />标签>通配符>继承
      </div>
      <div>
        <p class="heiha">2.Background简写怎么写，拆开写怎么写？</p>(1)background-color--背景颜色
        <br />(2)background-position--定位位置
        <br />(3)background-size--背景大小
        <br />(4)background-repeat--是否平铺
        <br />(5)background-origin--基准点
        <br />(6)background-clip--切割
        <br />(7)background-attachment--设置固定背景
        <br />(8)background-image--背景图片
        <br />
      </div>
      <div>
        <p class="heiha">
          3.文字怎么添加下划线，怎么居中/上下、
          <br />左右/，怎么缩进
          ，怎么设置字符间距？
          <br />怎么引入第三方字体、图标
        </p>
        <p style=" text-decoration: underline">文字下划线</p>
        <p style="text-align: center;line-height: 10px;">文字居中（上下）</p>
        <p style=" text-indent: 10px;">文字缩进</p>
        <p style="letter-spacing:20px;">字符间距</p>
        <a href="#">
          <i class="fa fa-home fa-fw"></i>&nbsp; 首页
        </a>
      </div>
    </div>

    <div class="new">
      <div>
        <p class="heiha">4.em，rem，vh，vw，px分别什么意思？</p>(1)px是像素值，屏幕显示最小点,
        <br />(2)em是相对于父级的字体大小,
        <br />(3)rem是相对于html根元素的字体大小,
        <br />(4)vh和vw相对于视口的高度和宽度
      </div>
      <div>
        <p class="heiha">5.Table表格怎么合并边框？</p>
        <p>border-collapse: collapse;</p>
        <table>
          <caption>学生成绩表</caption>
          <thead>
            <tr>
              <th>学号</th>
              <th>姓名</th>
              <th>成绩</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>猫啊</td>
              <td>88</td>
            </tr>
            <tr>
              <td>2</td>
              <td>狗啊</td>
              <td>98</td>
            </tr>
            <tr>
              <td>3</td>
              <td>猫狗</td>
              <td>68</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
      <div>
        <p class="heiha">6.Css盒模型有哪些属性？ 意义是 ？</p>(1)width和height
        <br />(2)min-width和max-width
        <br />(3)padding
        <br />(4)margin
        <br />(5)border
      </div>
    </div>
    <div class="new">
         <div>
        <p class="heiha">7.元素边框设置有哪些属性？</p>
        <p>border-width 元素边框宽度--1px</p>
        <p>border-color 元素边框颜色--red</p>
        <p>border-style 元素边框线--solid/dashed</p>
        <p>border 元素边框上/下/左/右</p>
        <p>border-top 下边框</p>
        <p>border-right 右边框</p>
        <p>border-left 左边框</p>
        <p>border-bottom 下边框</p>
        <p style="  border:1px dashed red;">边框宽度-1px/边框线-dashed/边框颜色-red</p>
      </div>
      <div>
        <p class="heiha">8.行元素、块元素怎么切换？</p>
        <p>行级：span标签 inline-- 切换成行级元素</p>
        <p>块级：div标签 block-- 切换成块级元素</p>
        <p>
          行块级：img标签 inline-block-- 切换
          <br />成行块级元素
        </p>
      </div>
      <div>
        <p class="heiha">9.Css定位属性有哪些？意义是什么？</p>(1) position：relative 相对定位----自身
        <br />(2) position：absolute 绝对定位----父级
        <br />(3)position：fixd 固定定位----浏览器
        <br />注 ：常用的三种定位，都用top/bottom/
        <br />left/right定位
      </div>
    </div>
    <div class="new">
        <div>
        <p class="heiha">
          10.内容溢出（超长）布局属性有哪些，文
          <br />字超长怎么显示为省略？
        </p>overflow属性:
        <br />visible--内容不剪切，溢出显示在框外
        <br />hidden--内容剪切，移除元素内容不可见
        <br />scroll--内容会溢出剪切，自动生成滚动条
        <br />auto--内容如果溢出， 会自动生成滚动条
        <br />inherit--继承父级的overflow值
        <br />text-overflow: ellipsis;
        <br />white-space: nowrap;
        <br />overflow:hidden;
        <span
          style=" display: block; width:100%;height:30px;border:1px solid green;overflow:hidden;
          text-overflow: ellipsis;white-space: nowrap;"
        >
          内容溢出了丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫
          丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫丫
        </span>
      </div>
       <div>
        <p class="heiha">11.css伪类有哪些，伪元素有哪些？怎么设置伪类时的鼠标样式？</p>伪类：
        <br />
        a:link {color:#FF0000;} 未访问
        <br />
        a:visited {color:#00FF00;} 已访问
        <br />
        a:hover {color:#FF00FF;} 标划过
        <br />
        a:active {color:#0000FF;} 已选中
        <br />first-child匹配第一个元素
        <br />伪元素：
        <br />：before---元素之前插入内容
        <br />：after--元素后面插入内容
        <span style="display: block;" class="ming">伪类时候的鼠标样式</span>
      </div>

      <div>
        <p class="heiha">12.将这个图用精灵图方法拆成6个图标</p>
        <img src="../assets/图片1.png" alt />
        <p class="new" style="border:none;">
          <span class="jing k1"></span>
          <span class="jing k2"></span>
          <span class="jing k3"></span>
          <span class="jing k4"></span>
          <span class="jing k5"></span>
          <span class="jing k6"></span>
        </p>
      </div>
    </div>
    <div class="new">
         <div>
        <p class="heiha">13.媒体查询怎么写？Css 2D、3D变换有哪些？</p>
        @media 媒体类型and （特性）{样式}
        <br />
        media screen and (min-width:900px){}
        <br />2D/3D:transform
        <br />
        <p class="zi zi1" style>
          移动：
          <br />translate(x, y)
        </p>
        <p class="zi zi2" style>
          缩放：
          <br />scale(x, y)
        </p>
        <p class="zi zi3" style>
          旋转：
          <br />rotate(deg)
        </p>
        <p class="zi zi4" style>
          倾斜：
          <br />skew(deg)
        </p>

        <p class="zi zi5" style>
          移动：
          <br />translate(x,y,z)
        </p>
        <p class="zi zi6" style>
          缩放：
          <br />scale(x,y,z)
        </p>
        <p class="zi zi7" style>
          旋转：
          <br />rotate(deg)
        </p>
        <p class="zi zi8" style>
          倾斜：无
          <br />skew(deg)
        </p>
      </div>
      <div>
        <p class="heiha">14.Css怎么设置阴影、圆角、缩放、旋转？</p>
        <p>阴影语法：box-shadow: h-shadow v-shadow blur spread color inset;</p>
        <p>圆角：border-radius：上/右/下/左</p>
        <p class="zi yin1">
          阴影
          <br />box-shadow:
        </p>
        <p class="zi yin2" style="line-height:20px">
          圆角
          <br />border-radius:
        </p>
        <p class="zi zi2" style>
          缩放：
          <br />scale(x, y)
        </p>
        <p class="zi zi3" style>
          旋转：
          <br />rotate(deg)
        </p>
      </div>
      <div>
        <p class="heiha">15.线性渐变怎么写，多个颜色的线性渐变怎么写？</p>
        <p>语法：background-image: linear-gradient(,);</p>
        <p class="xian h1"></p>
        <p class="xian h2"></p>
        <p class="xian h3"></p>
        <p class="xian h4"></p>
        <p class="xian h5"></p>
        <p class="xian h6"></p>
        <p class="xian h7"></p>
        <p class="xian h8"></p>
      </div>
    </div>
    <div class="new">
         <div>
        <p class="heiha">16.Css动画怎么写？写一个背景色变化过渡动画，写一个位移动画</p>
        <p>语法：animation: 名字 时间 方式 延迟 循环;</p>
        <p>
          @keyframes 名字{
          <br />
          0%{}
          <br />
          100%{}
        </p>
        <p class="bian guo">css变色动画</p>
        <p class="wei bian">css位移动画</p>
      </div>
      <div>
        <p class="heiha">17.单引号‘’和双引号“”，有什么区别，使用规则？</p>区别：
        <br />单引号和双引号都可以表示一个字符串，二者在语法上没有区别。
        但从规范上说，一般的大部分规范中都要求使用单引号来引用字
        符串，这样做有一个好处，如果一个js的变量是一段html代码
        的字符串，html的属性在规范中是使用双引号，字符串使用单
        引号，字符串中的html属性就可以直接使用双引号而不用转义。
        规则：
        在同一行代码内外部使用单引号，则外部使用双引号，反之则反，是为了区别开来，
      </div>
      <div>
        <p class="heiha">18.代码注释方法有哪些，区别是什么？</p>(1) HTML :
        <span v-html="'<！-- 注释内容 -->'"></span>

        <br />(2) CSS:/* 注释内容*/
        <br />(3) JS: //注 释内容; 或者/* 注释内容 */,
      </div>
    </div>

    <div class="new">
        <div>
        <p class="heiha">19.怎么用十六进制和rgb/rgba方式定义颜色，a是什么，怎么单独使用a？</p>
        <span style="font-size:12px;display:block">
          (1)十六进制
          <br />
          <p style=" color:#8e3939;">
            颜色依次为纯白：#ffffff;纯红：#ff0000;纯绿：#00ff00;纯蓝：#0000ff;
            #__ __ __ 这三个空白位置分别，代表red，green，blue要填写两位十六进制数。
            所以#ff 00 00 ,red部分为最大值ff，其余为0，代表红色最纯，绿色蓝色不上色。
            #fff ff ff ，红绿蓝三种纯色混合，产生白色，此处亦然。
          </p>(2)rgb
          <p style="  color:rgb(57, 223,90)">
            rgb(x，y，z)
            这三个参数是从0~255的十进制数，和十六进制色表示原理基本一致，
          </p>(3)rgba
          <p style="color: rgba(200, 60, 30, 0.3)">
            rgba(x，y，z，a)
            与rgb类似，其中代表元素的透明度0-1为取值范围，透明度作用于颜色和背景
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
