<template>
  <main>
   <header class="header">
     
          <nav class="navbar navbar-toggleable-md navbar-light pt-0 pb-0 ">
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
      </header>
  </main>
</template>

<script>
export default {
data:function(){
  return{
    // flag:true
  }
}
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700');

body{ font-size: 14px; color: #333; list-style: 26px;font-family: 'Roboto', sans-serif; }

/** ======================  base css ==============================**/

a:hover{ text-decoration: none; }
/** ======================  header ==============================**/
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
}

</style>