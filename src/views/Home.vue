<template>
  <div class="home">
    <div class="left">
    <img alt="Vue logo" src="../assets/quiz.jpg" height="300px" width="700px">
    </div>
    <div class="right">
       <button @click="$router.push('/login')">Get Started</button>
    </div>
  </div>
</template>
<script>
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style scoped>
.left{
  width:50%;
  float:left;
  padding-top:100px;
}
.right{
  float:left;
  width:30%;
  padding-top:250px;
  padding-left: 250px;
}
button{
   background-color: #FF600A;
   color:white;
   width:200px;
   height:30px;
   border-radius:100px;
   font-size:20px;
   padding-left: 0px;
}
</style>
