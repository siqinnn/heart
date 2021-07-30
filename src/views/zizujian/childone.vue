<template>
    <div class="home">
        <p> iam childone</p>
      <div >
            <label>Username</label>
            <input placeholder="Enter your username"/>
          </div>
          <div >
            <label>Email</label>
            <input placeholder="Enter your email address" />
          </div>
           <div >
            <label>password</label>
            <input placeholder="Enter your password" />
          </div>
           <div >
            <label>school</label>
            <input placeholder="Enter yourschool" />
          </div>
          <span style="display:block">{{inputName}}</span>
     
      <button class="button1" @click="childtake">下一步</button>
    </div>
</template>
<script>
export default {
    // props:{
    //  inputName:String
    // },
    props:["inputName"],
     
   
  data() {
    return {
       
       
    };
  },
  created() {},
  mounted() {},
  methods: {
      childtake(){
          this.$emit("fathermethod")
      },
      fathermethod(){
          
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

