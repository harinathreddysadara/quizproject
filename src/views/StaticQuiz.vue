<template>
    <main class="main ">
        <br><h1>Static Quiz</h1><hr>
         <button type="button" @click="logout"  class="btn btn-info pull-right" >LogOut</button>
        <div >
            <form name="myform" class="form-group">
                <h6>Select a category:
                <select @change="saveCategory($event)">
                    <option class="right" v-for="category in giveCategories" :value="category.categoryId" :key="category.categoryId">
                    {{category.categoryName}}
                    </option> 
                </select></h6><br>
                
                <div class="name">
                    <span>Contest Name:</span>
                    <input type="text" name="contestName" v-model="contestName" />
                </div><br>
                <div class="start_time">
                    <span>Contest Start time:</span>
                    <input type="datetime-local" name="conteststart" v-model="contestStartTime"/>
                </div><br>
                <div class="end_time">
                    <span>Contest End Time: </span>
                    <input type="datetime-local" name="contestend" v-model="contestEndTime"/>
                </div><br>
                <div>
                    <span>No. of Questions:</span>
                    <input type="number" name="questions" min="0" v-model="noOfQuestions"/>
                </div><br>
                <div>
                    <span>No of skips allowed:</span>
                    <input type="number" name="skips" v-model="noOfSkipsAllowed"/>
                </div>
                <br>
                <br>
                <div class="questions-container">
                    <ul>
                        <li v-for="(ques,index) in question" :key="ques.questionId" >
                            <div class="ques-child">
                                <span class="c1">{{index}}</span><span class="c1"> {{ques.questionText}}</span>
                            <span class="c1">{{ques.difficultyLevel}}</span>
                            <button class="add c1" @click.prevent="saveQuestion(ques)">Add</button></div>
                        </li>
                    </ul>
                </div>
                <br><br>
                <button type="submit" @click.prevent="saveDetails"> Submit</button>
            </form>
     </div>
    </main>
    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'StaticQuiz',
  components: {
    
  },
  data: function() {
    return {
      contestName: "",
      contestStartTime: "",
      contestEndTime:"",
      noOfQuestions:0,
      noOfSkipsAllowed:"",
      categoryId:'',
      counter:0
    }
  },
  computed:{
      ...mapGetters(['question','giveCategories','getQuestionByCategory'])
  },
  methods:{
      saveDetails(){
          const data = {
                contestName: this.contestName,
                adminId:localStorage.getItem('adminId'),
                contestStartTime: this.contestStartTime,
                contestEndTime:this.contestEndTime,
                categoryId:this.categoryId,
                noOfQuestions:this.noOfQuestions,
                noOfSkipsAllowed:this.noOfSkipsAllowed,
                questions: this.$store.state.questionIds
          }
          window.console.log('in save METHOD',data)
          this.$store.dispatch('addStaticQuiz',data)
      },
      saveCategory(event){
          this.categoryId=event.target.value
          this.$store.dispatch('getQuestions',event.target.value)
      },
      saveQuestion(ques){ 
          window.console.log(ques)
          this.$store.dispatch('saveQuestion',ques)
          window.console.log('in save',this.$store.state.questionIds)
            }
  },
  created(){
      window.console.log('in created static quixz')
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
input[type="text"]{
    /* width: 140%; */
    height: 20px;
    border-radius: 3px;
}
input[type="number"] {
    /* width: 50%; */
    height: 20px;
    border-radius: 3px;
}
input[type="datetime-local"] {
    /* width: 50%; */
    height: 20px;
    border-radius: 3px;
}
h1 {
    text-align: center;
}
ul{
    margin: 0px;
    padding: 0px;
}
li{
  list-style-type: none;
}
.add{
    background: black;
    color: white;
    border-radius: 8px;
    height: 5%;
}
.questions-container{
    /* border:1px solid green; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
}
.ques-child{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    
    /* justify-content: flex-start; */
}

/* .form{
    justify-content: center;
}
label{
    margin-right: 10px;
    float: left;
}
.container{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
}
ul{
    margin: 0px;
    padding: 0px;
}
li{
    list-style-type: none;
}
button{
    margin-left: 15px;
    outline: none;
}
button:hover {
    color: grey;
}
.left{
    float: left;
}
.right{
    float: right;
}
form{
    justify-content: center;
    width:500px;
    margin:30px 30px;
}
.add{
    background: black;
    color: white;
    border-radius: 8px;
}
.questions-container{
    border:1px solid green;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
} */
</style>