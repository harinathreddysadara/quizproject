<template>
<main>
    <div class="container">
   <div class="question">
       <table class="cardDetails" align="center" border="1" cellpadding="10px">
    <tr>
      <th>Rank</th>
      <th>User Name</th>
      <th>Score</th>
    </tr>
    <tr v-for="(item, index) in getLeaderBoard" :key="index">
      <td>{{index}}</td>
        <td>{{item.Name}}</td>
        <td>{{item.score}}</td>
    </tr>
      </table>
</div>
    </div>
  </main>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
computed:{
  ...mapGetters(['getLeaderBoard'])
}


  
}
</script>
<style>
.cat{
  text-align: center;
  padding: 10px;
  float: left;
}
.questions{
  border: 1px solid black
}
.container {
  border: 4px solid black;
  width: 50%;
  margin-left: 25%;
  margin-top: 10%;
   background-color: skyblue;
  border-radius: 10px;
}
</style>