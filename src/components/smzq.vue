<template>
  <div class="home shijiu1">
    <button @click="sendparent1">vue生命周期</button>
    


  </div>
</template>
<script>
export default {

  
  data() {
    return {
      duixiang2: {
        name: "我是儿子111111对象"
      }
    }

  },

  methods: {
    sendparent1() {
      this.$emit("clickkkkk1", this.duixiang2);
    },
    //子传父

   
  },


  
};
</script>
<style>

</style>
