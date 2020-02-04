<template>
  <main>
   <h1>Contest</h1> 
    <button type="button" @click="logout"  class="btn btn-info pull-right" >LogOut</button>
   <ul>
     <li v-for="(contest,index) in getDynamicContests" :key="index">{{contest}}<button v-if='contest.completed' @click="fetchLeaderboard(contest.contestId)">Leaderboard</button></li>
   </ul>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
created(){
  this.$store.dispatch('viewDynamicContest',{
    success:this.onSuccess,
    fail:this.onFail
  })
},
computed:{
...mapGetters(['getDynamicContests'])
},
methods:{
 fetchLeaderboard(contestid){
   
this.$store.dispatch('getLeaderBoardDetail',{
  contestId:contestid,
  success:this.onLeaderboardSuccess,
  fail:this.onLeaderboardFail
})
 },
 onLeaderboardSuccess(res){
   window.console.log(res)
   this.$router.push('/leaderboard')
 },
 onLeaderboardFail(){
   window.alert('something wrong')
 }
}

}
</script>

<style>

</style>