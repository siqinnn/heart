<template>
  <div class="home">
    <div class="new">
      <div>
        <p class="heiha">1.弹性盒子有哪些属性，意义是什么？</p>弹性布局：display：flex;
        <br />属性-flex-direction值排列方向
        <br />row :从左到右的水平方向
        <br />row-reverse：从右到左的水平方向
        <br />column:从上到下的垂直方向
        <br />column-reverse从下到上的方向
        <br />属性-justify-content 子元素对齐方式
        <br />flex-start 主轴起点对齐
        <br />flex-end 主轴结束点对齐
        <br />center 在主轴中居中对齐
        <br />space-between 两端对齐
        <br />space-around 子元素间的距离相等
        <br />属性-align-items 子元素对齐的方式
        <br />stretch 填充整个容器
        <br />flex-start 侧轴的起点对齐
        <br />flex-end 侧轴的终点对齐
        <br />center 在侧轴中居中对齐
        <br />baseline 以子元素的第一行文字对齐
      </div>
      <div>
        <p class="heiha">2.一个H5页面由哪几个基础的标签组成，分别做什么用,script标签有什么 ；</p>article --标记定义一篇文章
        <br />header --定义一个页面或一个区域的头部
        <br />nav --定义导航链接
        <br />section --定义一个区域
        <br />aside --定义页面内容部分的侧边栏
        <br />hgroup --定义文件中一个区块的相关信息
        <br />figure --定义一组媒体内容及它们的标题
        <br />figcaption --定义 figure 元素的标题。
        <br />footer --定义一个页面或一个区域的底部
        <br />dialog --定义一个对话框
        <br />script标签:通常放置在一个网页的头部标签内的用于
        链接外部JS文件外部资源标签,script 标签最常见的用途是链接外部js，外部资源。
      </div>
      <div>
        <p class="heiha">3.什么是行元素、块元素，区别？</p>块级：
        <br />1.独占一行，宽度自动填满其父元素宽度
        <br />2.块级元素可以设置宽高
        <br />3.块级元素可以设置margin，padding
        <br />4.display:block;
        <br />行内：
        <br />1.同处一行，其宽度随内容的变化而变化。
        <br />2.行内元素不可以设置宽高
        <br />3.行内元素水平方向margin可生效。竖直方向不生效。
        <br />4.display:inline;
        <br />行级：
        <br />1.可以和其他元素处于一行，不用另起一行。
        <br />2.元素的高、宽及顶部和底部边距不可设置。
        <br />3.元素的宽度不可改变。
      </div>
    </div>
    <div class="new">
      <div>
        <p class="heiha">
          4.p、a、div、hr、ul、li、span、br、
          title、 style、 meta、 link、 script、img、
          table、th、tr、td、form、input、textarea、
          radio、checkbox、label、select标签各是什么，怎么用？
        </p>
        
          p--文本块级标签--直接写入内容
          <br />a--指定w3c超链接--href导入地址
          <br />div--块级无样式--随意使用
          <br />hr--水平分隔线--需要水平线的位置放hr
          <br />ul--标签定义无序列表--与li同用
          <br />li--标签定义列表项目--与ul同用
          <br />span--行级标签--可插入图片文本
          <br />br--换行标签--需要换行时候用
          <br />title--标题标签--写页面前定义题目
          <br />style--行内写css样式--此标签内写入样式
          <br />meta--提供有关页面的元信息--不包含内容
          <br />link--链接一个外部样式表--导入外部资源
          <br />script--写逻辑标签--写逻辑代码
          <br />img--图片标签--行内插入图片src
          <br />table--标签定义 HTML 表格--写入表头信息
          <br />th--表头单元格--写入数据
          <br />tr--定义表格中的行--table内包住th，td
          <br />td--标准单元格--写入内容
          <br />form--为用户输入创建 HTML 表单--向服务器传输数据
          <br />input--输入框--单选框，复选框，按钮，文本框
          <br />textarea--定义多行的文本输入控件--通过cols和rows规定尺寸
          <br />radio--单选按钮--type内输入radio实现单选
          <br />checkbox--复选框--type内输入checkbox实现复选框
          <br />label--标签为input元素定义标注--触发控件
          <br />select--表单控件，单选复选--结合option使用
     
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

