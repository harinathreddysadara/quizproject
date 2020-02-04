<template>
  <main>
   <!-- <button  v-for="category in giveCategories" v-bind:key="category" > -->
   <!-- </button> -->
   <!-- <button @click="Categories"></button> -->
  <ul class=" pagination pagination-lg ">
        <select @change="getQuestions($event)" class="cat">
          <option selected="true" disabled="disabled">Choose</option> 
          <option v-for="item in giveCategories" v-bind:key="item.categoryId" :value="item.categoryId" >{{item.categoryName}}</option>
        </select>
  </ul>
  <div class="container">
     <div class="question">
        <ul style="list-style:none" >
          <li v-for="(item, index) in getQuestionByCategory" :key="index">{{item.questionText}}     <button type="button" @click="addQuestion(getQuestionByCategory[index],index)" >ADD</button><button type="button" @click="deleteQuestion(item.questionId)" >Reject</button>
          </li>
        </ul>      
     </div>
  </div>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      // selected: '',
      // options: [
        
      //     {text:'easy',value:'easy'},
      //     {text:'medium',value:'medium'},
      //     {text:'hard',value:'hard'}
        
      // ]
    }

  },
methods:{
  getQuestions(event){
    window.console.log(event.target.value)
    const data = event.target.value
    this.$store.dispatch('getQuestionByCategoryId',{
      data:data
    })

  },
  
  logout(){
    localStorage.removeItem('adminId')
    localStorage.removeItem('role')
     this.$router.push('/login')

  }
,
  // setFlag(event){
  //   window.console.log(event.target.value)
  //   const data=event.target.value
  //   this.selected=data
    
  // },
  addQuestion(object,index){
  
// var sel=this.selected
window.console.log(index)
window.console.log('first',object)
// object.difficultyLevel=sel
window.console.log('after',object)
// let obj=getQuestionByCategory[index]
// let data={selected:sel,
// questionId:questionid
// }
this.$store.dispatch('questionAdd',{
  data: object
})
  },
  deleteQuestion(deleteQuestionById){
   this.$store.dispatch('rejectQuestion',{deleteQuestionById})
  }
 
},
computed: {
     
      ...mapGetters(['giveCategories','getQuestionByCategory'])
  },
  created(){
this.$store.dispatch("getCategories",{
  success: this.onFetchingSuccess,
  fail: this.onFetchingFail
})

  },
   onFetchingSuccess(res) {
      window.console.log(res)    
    },
    onFetchingFail() {
      
    }
}
</script>

<style scoped>
.cat{
  text-align: center;
  padding: 10px;
  float: left;
  height: 70px;
  width: 80px;
  

}
.questions{
  border: 1px solid black
}
.container {
  border: 2px solid black;
  width: 50%;
  /* margin-left: 25%;
  margin-top: 10%; */
   background-color: skyblue;
  border-radius: 10px;
}
</style>