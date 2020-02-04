<template>
  <main>
    <div style="position:relative" >
      <h1>Validate the Questions</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQktb6CmSUOtbBwBF8fUkfIra28YoYrdhdlwhiROmNGHRbKoXce" style="height:200px">
      <button type="button" @click="logout"  class="btn btn-info pull-right" >LogOut</button>
      <hr>
      <div  class="up">
         <Validator class="val"></Validator>
      </div>
    </div>
    <div ><br></div>
  </main>
</template>

<script>
import Validator from '@/components/Validator';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
components:{
  Validator
},
methods:{
  logout(){
    localStorage.removeItem('adminId')
     localStorage.removeItem('role')
     this.$router.push('/login')
  }
}
}
</script>

<style>
/* .val{


} */
/* .cover{
 border:1px solid blue; 

} */


</style>