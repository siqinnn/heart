<template>
    <div class="home">
        <div class="big">
            <p  v-html="hi"></p>
         <div class="takein">
             <div v-if="show==1">
             
             <childone :inputName="name1" @fathermethod="fathermethod" ></childone>
             </div>
             <div v-if="show==2">
             <childtwo :inputName2="name2" @fathertwo="fathertwo" ></childtwo>
             </div>
         </div>
        </div>
    </div>
</template>
<script>
import Childone from "@/views/zizujian/childone.vue";
import Childtwo from "@/views/zizujian/childtwo.vue";
export default {
  components: {
    Childone,
    Childtwo
  },
  data() {
    return {
      show: 1,
      hi: "公共不变的",
      name1: "我是父亲这边的值",
      name2: "父组件这边子二定义的"
    };
  },
  created() {},
  mounted() {},
  methods: {
    fathermethod() {
      this.show = 2;
    },
    fathertwo() {
      this.show = 1;
    }
  }
};
</script>
<style>
.big {
  width: 100%;
  height: 600px;
  background: gray;
  text-align: center;
  color: brown;
  font-size: 22px;
  font-weight: 800;
}
.takein {
  width: 70%;
  height: 400px;
  background: floralwhite;
  margin: 0 auto;
}
</style>

