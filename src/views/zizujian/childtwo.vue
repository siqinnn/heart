<template>
    <div class="home">
        <p>我是子组件二</p>
        <p>一二三四五六</p>
        <p>abcdefghijklmn</p>
        <p>12345678910</p>
        <span>{{inputName2}}</span>
        <button class="button1" @click="childtake1">下一步</button>
    </div>
</template>
<script>
export default {
    props:{
inputName2:String
    },
  data() {
    return {
      
    };
  },
  created() {},
  mounted() {},
  methods: {
      childtake1(){
          this.$emit("fathertwo")
      }
  }
};
</script>
<style>
.button1{
background: grey;
color: white;
border-radius: 10px;
}
</style>

