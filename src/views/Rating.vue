<template>
<div id="DCQuiz" >
    <button type="button" @click="logout"  class="btn btn-info pull-right" >LogOut</button>
    <div id="Heading">
    <h1>Rating</h1><hr>
    </div>
    <div id="DCForm" class="panel panel-default" >
        <form >
            <div class="Left">Choose a Category</div><br>
            <div class="Left"><select @change="saveCategory($event)">
                    <option class="right" v-for="category in giveCategories" :value="category.categoryId" :key="category.categoryId">
                    {{category.categoryName}}
                    </option> 
                </select>
            </div>
        </form>
    
        <div id="QuestionList" >
            <div v-for="(item, index) in question" :key="index" >
            <div id="Questions">
            <div class="Left">{{item.questionText}}</div>
                <div class="Right">
                <select name="category" required v-model="diff">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                </select> 
                <button @click="setRating(item.questionId,diff)">set</button>
                </div>
                <br>
                <br>
            </div>
            </div>
        </div>
    </div>
    <button @click="Rate()">Validate</button>
</div>
</template>




<script>
import { mapGetters } from "vuex";
export default {
name: 'Rating',
data()
  {
      return{
        categoryId:"",

      }
  },
methods:{
    Rate(){
        window.console.log('in valid',this.$store.state.ratingList)
        const data = this.$store.state.ratingList
        window.console.log('getting into store:',data);
        this.$store.dispatch('Rating');
    },
      onChange() {
        window.console.log(this.categoryId);
        this.$store.dispatch('getQuestions',this.categoryId);
      },
      saveCategory(event){
          this.categoryId=event.target.value
          this.$store.dispatch('getQuestions',event.target.value)
      },
      setRating(qid,diff){
          window.console.log(qid,diff)
          const data = {
              questionId : qid,
              difficultyLevel: diff
          }
          this.$store.state.ratingList.push(data)
      },
    
  logout(){
    localStorage.removeItem('adminId')
  }

      
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
      
    },

  computed: {
    ...mapGetters(["question","giveCategories"])    
  }
}
</script>

<style scoped>

.DCForm
{
    display: flex;
    justify-content: center;
   
}
.Left
{
    float: left;    
}
.Right
{
    float: right;    
}
#QuestionList{
    margin-left: 200px;
    width: 50%;
} 
</style>