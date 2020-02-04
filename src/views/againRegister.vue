<template>
  <main>
     <div class="container">
      <div class="imgcontainer">
      <img src="https://cdn0.iconfinder.com/data/icons/food-online/512/membership-register-customer-user-card-512.png" alt="Avatar" class="avatar">
    </div>
        <!-- <label>Email</label><input type="email" v-model="userEmail"> -->
        <!-- <br> -->
        <label>Email</label><input type="email" v-model="userEmail">
        <br>
        <label>Role</label>
        <!-- <input type="text" v-model="userRole">  -->
        <select v-model="userRole" >
          <option value="admin">Admin</option>
          <option value="validator">Validator</option>
          <option value="quizMaster">Quiz Master</option>
          <option value="ranker">Ranker</option>
        </select>
        <br>
        <!-- <label>Password</label><input type="password" v-model="userPassword"> -->
        <br>
        <!-- <label>Role</label><input type="text" v-model="userRole"> <br> -->
        <button type="submit" @click="Registration">UpdateProfile</button>
      </div>
<br>

<!-- <div v-if='!image'>
  <h3>Select an image</h3>
    <input type="file" name="" @change="onFileChange">
</div>
    <div v-else>
<img:src="image"/>
<button @click="removeImage($event)">Remove</button>

    </div> -->



  </main>
</template>

<script>
export default {
data:function()
{
 return {
   userEmail:'',
   userRole:'',
   
  //  userRole:''

 }
},
methods: {

  Registration() {
            const data = {
              
              
              channel_channel_id:1,
              role: this.userRole
              
                
                // "userRole":this.userRole
            }
            window.console.log(this.userRole)
            this.$store.dispatch('RoleUpdate', {
                data,
                 success: this.onUpdateSuccess,
                 fail: this.onUpdateFail
            })
        },
         onUpdateSuccess (res) {
      const data={
      provider:1
      }
      window.console.log(res)
      this.$store.dispatch('getRole',{
        data,
        success:this.roleSuccess,
        fail:this.roleFail
      })
           window.console.log(res)
           this.$router.push('/home')
         },
         roleSuccess(res){
           
          
      window.console.log('role',res.role)
    if(res.role==null)
    this.$router.push('/againregister')
    else{
      if(res.role=='admin')
      this.$router.push('/admin')
      else if(res.role=='validator')
       this.$router.push('/validation')
       else if(res.role=='quizMaster')
       this.$router.push('/quizMaster')
       else if(res.role=='ranker')
       this.$router.push('/rating')
       else
       window.alert('Role undefined')
    }
    },
    roleFail(){

    },
         onUpdateFail () {
            window.alert('Registration failed')
         }    
}



       
}

</script>

<style scoped>
input[type=email], input[type=password],input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;

}
img{
  height: 350px;
  width:400px;
}
.container
{
  border: 4px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
  height: 60%;
}
label{
  margin-right: 5px;
}
button{
  background: green;
  color:white;
}
</style>