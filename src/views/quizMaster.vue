<template>
    <div>
       
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvqUpeKsPneYJsK5gmWcfsw5HFYg99twA2w1tjTIkMXf2bAwpG" alt="Avatar" style="width:100%">
            <div class="container">
                <router-link to="/createStatic">Create Static Quiz</router-link>|
                <router-link to="/viewStaticContest"> View static contests</router-link>
                
            </div>
        </div>
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgkSdjLlztZQKyAF-rvArl3oRB9dIZfIKoqKChNMeFTn2odK6P" alt="Avatar" style="width:100%">
            <div class="container" style="position:relative">
                <router-link to="/createDynamic">Create Dynamic</router-link>|

                <router-link to="/viewDynamicContest"> View Dynamic contests</router-link>
            </div>
        </div>
        <button type="button" @click="logout"  class="btn btn-info " style="display:block;margin-left:50%;position:absolute;top:70%;width:150px" >LogOut</button>

    </div>
</template>
<script>
export default {
  methods:{
  logout(){
    localStorage.removeItem('adminId')
    localStorage.removeItem('role')
     this.$router.push('/login')
  }
}
}
</script>
<style scoped>

/* .card{
    box-shadow: 0 8px 8px  0 rgba(0,0,0,0.6);
    width: 300px;
    text-align: center;
    float: left;
    margin-right:100px;
} */
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: inline-block;
  width: 40%;
  margin:10px;
  margin-top: 70px;
}
.container {
  padding: 2px 16px;
  text-align: center;
}
.head{
    height: 50px;
    width:100%;
    background: orange;
}
form,.h1{
    text-align: center;
    }
input{
    width:500px;
    height:30px;
    margin:10px;
}
</style>