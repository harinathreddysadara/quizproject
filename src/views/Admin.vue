<template>
  <main>
    
    <!-- <header class="header">
          <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">
            <Validator>Validate</Validator>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand p-0 mr-5" href="#"><img src="http://via.placeholder.com/61x14"></a>
            <div class="float-left"> <a href="#" class="button-left"><span class="fa fa-fw fa-bars "></span></a> </div>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown messages-menu">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-bell-o"></i>
                    <span class="label label-success bg-success">10</span>
                  </a>
              </li>
            </ul>
          </div>
        </nav>
      </header> -->
      
      
        
      
    
      <div class="main">
        
        <!-- <aside> -->
          <div class="sidebar left ">
            <div class="user-panel">
              <div class="pull-left image">
                <img src="https://img.icons8.com/bubbles/2x/admin-settings-male.png" class="rounded-circle" alt="User Image">
              </div>
              <div class="text-info">
                <p>Admin</p>
                
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                <button type="button" @click="logout"  class="btn btn-outline-light" style="margin:6px;">LogOut</button>
              </div>
            </div>
            <ul class="list-sidebar bg-defoult">
              <li> <a href="#" data-toggle="collapse" data-target="#dashboard" class="collapsed active" > <i class="fa fa-th-large"></i> <span class="nav-label"> <button  @click="send">Validator</button></span> <span class="fa fa-chevron-right "> </span> </a>
            </li>
           <li> <a href="#" data-toggle="collapse" data-target="#dashboard" class="collapsed active" > <i class="fa fa-th-large"></i> <span class="nav-label"> <button  @click="send4">Ranker</button></span> <span class="fa fa-chevron-right "> </span> </a>
            </li>
            <li> <a href="#" data-toggle="collapse" data-target="#products" class="collapsed active" > <i class="fa fa-bar-chart-o"></i> <span class="nav-label" ><button  @click="send2">QuizMaster</button></span> <span class="fa fa-chevron-right "></span> </a>

          </li>

        <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" class="collapsed active" ><i class="fa fa-shopping-cart"></i> <span class="nav-label"><button  @click="send3">Leaderboard</button></span><span class="fa fa-chevron-right"></span></a>
        <ul  class="sub-menu collapse" id="e-commerce" >
          <li><a href=""> Products grid</a></li>

        </ul>
      </li>

    </ul>
    </div>
    <!-- </aside> -->
  
    
    </div>
  
  </main>
</template>

<script>
// import Validator from '@/components/Validator';
//import admi from '@/components/Header';
export default {
  data:function(){
   return{
     flag:true
   }
  },
components:{ 
 //admi
},
created(){
  window.console.log('in admin page',this.$store.state.currentRole)
},
methods:{

send(){
  this.$router.push('/validation')
},
send2(){
  this.$router.push('/quizmaster')
},
send3(){
  this.$router.push('/leaderboard')
},
send4(){
  this.$router.push('/rating')
}
}

}
</script>

<style >
.main{
 margin-left: 40%;
 margin-top: 10%;

}
/* @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700');

body{ font-size: 14px; color: #333; list-style: 26px;font-family: 'Roboto', sans-serif; }

/** ======================  base css ==============================**/

/* a:hover{ text-decoration: none; }

.header{ background-color: #3c8dbc }
.header .dropdown-menu {
    position: absolute;
    right: 0;
    left: auto;
    border-radius: 0px;
}
.header .user-image {
    float: left;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
}

.header .navbar-light .navbar-nav .nav-link{ color: #fff }
.header .navbar-light .navbar-nav .nav-link:hover, .header .navbar-light .navbar-nav .nav-link:focus   {
    
       background: rgba(0,0,0,0.1);
    color: #f6f6f6;
}
.header .fa.fa-fw.fa-bars{ color: #fff; }
.header .navbar-light .navbar-nav .nav-link {
    color: #fff;
    padding: 10px 20px;
    position: relative;
}
.header  li>a>.label {
    position: absolute;
    top: 9px;
    right: 7px;
    text-align: center;
    font-size: 9px;
    padding: 2px 3px;
    line-height: .9; background-color: #333;    border-radius: .25em;
}
.header  li>a:after{ display: none; }

.header-ul{    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #ffffff;
    padding: 7px 10px;
    border-bottom: 1px solid #f4f4f4;
    color: #333;
    font-size: 14px;}



.navbar-nav>.messages-menu>.dropdown-menu li .menu>li>a>p {
    margin: 0 0 0 45px;
    font-size: 12px;
    color: #888888;
}  */

/* .footer-ul a{
	border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    font-size: 12px;
    background-color: #fff;
    padding: 7px 10px;
    border-bottom: 1px solid #eeeeee;
    color: #333 ; display: block;
    } */

      .dropdown-menu-over .menu{  max-height: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: hidden;}

    /* .navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a {
    color: #444444;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
} */
/* .navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a>.glyphicon, .navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a>.fa, .navbar-nav>.notifications-menu>.dropdown-menu li .menu>li>a>.ion {
    width: 20px;
} */

a.navbar-brand {
    width: 165px;
}

.sidebar{ width:420px;  background-color:#000;transition: all 0.5s  ease-in-out; }
.bg-defoult{background-color:#222;}
.sidebar ul{ list-style:none; margin:0px; padding:0px; }
.sidebar li a,.sidebar li a.collapsed.active{ display:block; padding:8px 12px; color:#fff;border-left:0px solid #dedede;  text-decoration:none}
.sidebar li a.active{background-color:#000;border-left:5px solid #dedede; transition: all 0.5s  ease-in-out}
.sidebar li a:hover{background-color:#000 !important;}
.sidebar li a i{ padding-right:5px;}
.sidebar ul li .sub-menu li a{ position:relative}
.sidebar ul li .sub-menu li a:before{
    font-family: FontAwesome;
    content: "\f105";
    display: inline-block;
    padding-left: 0px;
    padding-right: 10px;
    vertical-align: middle;
}
.sidebar ul li .sub-menu li a:hover:after {
    content: "";
    position: absolute;
    left: -5px;
    top: 0;
    width: 5px;
    background-color: #111;
    height: 100%;
}
.sidebar ul li .sub-menu li a:hover{ background-color:#222; padding-left:20px; transition: all 0.5s  ease-in-out}
.sub-menu{ border-left:5px solid #dedede;}
	.sidebar li a .nav-label,.sidebar li a .nav-label+span{ transition: all 0.5s  ease-in-out}
	

	.sidebar.fliph li a .nav-label,.sidebar.fliph li a .nav-label+span{ display:none;transition: all 0.5s  ease-in-out}
	.sidebar.fliph {
    width: 42px;transition: all 0.5s  ease-in-out;
   
}
	
.sidebar.fliph li{ position:relative;
}
.sidebar.fliph .sub-menu {
    position: absolute;
    left: 39px;
    top: 0;
    background-color: #222;
    width: 150px;
    z-index: 100;
}
	

	.user-panel {
    clear: left;
    display: block;
    float: left;
}
/* .user-panel>.image>img {
    width: 100%;
    max-width: 45px;
    height: auto;
} */
.user-panel>.info,  .user-panel>.info>a {
    color: #fff;
}
.user-panel>.info>p {
    font-weight: 600;
    margin-bottom: 9px;
}
.user-panel {
    clear: left;
    display: block;
    float: left;
    width: 100%;
    margin-bottom: 15px;
    padding: 25px 15px;
    border-bottom: 1px solid;
}
.user-panel>.info {
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px;
}

.fliph .user-panel{ display: none; }
.val{
float:right;

}
button{
  width: 100%;
}


</style>