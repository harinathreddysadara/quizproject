<template>
<div>
    <footer class="footer">
      <p>
        This is Qiuz Content Management application.
        Through this application we have provided three user roles viz. admin,validator and qiuz Master.
        Qiuz Master can create two types of qiuz to play in our android app viz. static and dynamic.
        
        </p>
        <li> Contact Us</li>
        <li> support Us</li>
   </footer> 
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  /* position: relative;
    border: 5px solid #383733;
    background:gray;
    min-height: 8vh;
    color: orange;
    justify-content:center;
    height: auto;
    left: 0;
    bottom: 0%;
     */
   
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: skyblue;
  color: white;
  text-align: center;
  
}
li
{
   display:block;
   float:left;
   
   padding: 5px; 
}
</style>