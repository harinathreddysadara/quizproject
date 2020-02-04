<template>
  <main class="login">
    <div class="container">
      <div class="imgcontainer">
        <img
          src="@/assets/login.png" width="80px" height="80px;">
      </div>

      <label>Email</label><br><input v-model="userEmail" type="email" /><br />
      <label class="abcd">Password</label><br><input type="password" v-model="userPassword" /><br />
     <br />
      <button class="abc" @click="initiateLogin">Submit</button>
      <hr>
      <br />
      <br/>
      <router-link to="/register" class="xyzzz">New user?</router-link>
      <br />
      <br />
    </div>
  
  </main>
</template>

<script>
 //import Facebook from '@/components/Facebook'

export default {
  components:{
    
},
  data: function() {
    return {
      userEmail: "",
      userPassword: "",
          
    }
    
    
  },
  created(){
    
  },
  methods: {
    
    initiateLogin() {
      
      const data = {
        email: this.userEmail,
        password: this.userPassword
      }
      this.$store.dispatch("loginUser", {
        data,
        success: this.onLoginSuccess,
        fail: this.onLoginFail
      })
    },
    onLoginSuccess(res) {
      //localStorage.setItem('isNotLogged',false)
      const data={
      provider:1
      }
      window.console.log('in error',res.error)
      if(res.status==401)
        { 
          this.$router.push('/error')
        }
        else{
          this.$store.dispatch('getRole',{
        data,
        success:this.roleSuccess,
        fail:this.roleFail
      })
        }
      
    
    },
    onLoginFail() {
      alert('error')
    },
    roleSuccess(res){
        localStorage.setItem('adminId',res.id)
        localStorage.setItem('role',res.id)
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
window.alert('Role undefined')
    }
  }
}

</script>
 
<style  scoped>
.abcd{
  margin-left: 20px;
}
.container {
  border: 4px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
}
/* input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
} */
input[type=email], input[type=password] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  /* margin-right: 350px; */
  border-radius: 9px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
img.avatar {
  width: 20%;
  border-radius: 50%;
}
.container{
  background-color: skyblue;
  border-radius: 10px;
}
.xyz{ 
   background-color: rgb(71, 138, 71);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 10%;
  font-size: 15px;
}
.xyzz{
   background-color: rgb(71, 138, 71);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
  margin-left: 30px;
  font-size: 15px;
}
.abc{
  background-color: green;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 20%;
  border-radius: 9px;
  font-size: 15px;
}
hr{
  margin-right: 20px;
  margin-left: 20px;
}
.xyzzz{
  color: black;
  font-size: 20px;
}
</style>








// Client ID
// 180429750525-nldu3dbkaj5bcs3mul9aia0gtv0l35ek.apps.googleusercontent.com
// Client secret
// Pengz7VWgYloz7Ywfq_C4Wfx
// Creation date
// January 22, 2020 at 12:52:50 PM GMT+5
// Total usage (last 30 days)
// 0