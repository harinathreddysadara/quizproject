<template>
<div id="DCQuiz">
    <div id="Heading">
    <h1>Dynamic Quiz</h1><hr>
    </div>
         <div id="DCForm">
            <form>
                <div class="Left">Contest Name</div>
                <br>
                <div class="Left"><input type="text" v-model="contestName"></div><br><br>

                <div class="Left">Contest Time Limit</div>
                <br>
                <div class="Left"><input type="datetime-local" v-model="contestTimeLimit"></div><br><br>

                <div class="Left">No Of Questions</div><br>
                <div class="Left"><input type="text" v-model="noOfQuestions"></div><br><br>

                <div class="Left">Contest Start Time</div><br>
                <div class="Left"><input type="datetime-local" v-model="contestStartTime"></div><br><br>

                <div class="Left">No Of Skips Allowed</div><br>
                <div class="Left"><input type="text" v-model="noOfSkipsAllowed"></div><br><br>

                <div class="Left">Choose a Category</div><br>
                <div class="Left"><select @change="saveCategory($event)">
                    <option class="right" v-for="category in giveCategories" :value="category.categoryId" :key="category.categoryId">
                    {{category.categoryName}}
                    </option> 
                </select>
                </div>
            </form>

            
                <div id="QuestionList">
                    <div v-for="(item, index) in question" :key="index" >
                        <div id="Questions">
                            <div class="Left">{{item.questionText}}</div>
                            <div class="Right"><button v-on:click="addquestionindex(item)">Add</button></div>
                            <br>
                            <div class="Left">{{item.difficultyLevel}}</div>
                            <br>
                            <br>
                        </div>
                    </div>
                </div>
    </div>
    <button type="submit" @click.prevent="saveDetails">CREATE CONTEST</button>
</div>
</template>




<script>
import { mapGetters } from "vuex";
export default {
name: 'DynamicContestCreate',
data()
  {
      return{
          adminId:localStorage.getItem('adminId'),
        categoryId:"",
        questionIdList:[],
        contestName: "",
      contestStartTime: "",
      contestTimeLimit:"",
      noOfQuestions:"",
      noOfSkipsAllowed:""
      }
  },
methods:{
  saveCategory(event){
          this.categoryId=event.target.value
          window.console.log('in save',this.categoryId);
          this.$store.dispatch('getQuestions',event.target.value)
      },
      onChange() {
        window.console.log(this.categoryId);
        this.$store.dispatch('getQuestions',this.categoryId);
      },
      addquestionindex(item){
          this.$store.state.questionIdList.push(item);
          window.console.log()
      },
      saveDetails(){
          const data = {
                // userId:null,
                contestName: this.contestName,
                contestStartTime: this.contestStartTime,
                contestTimeLimit:this.contestEndTime,
                adminId:'test123',
                categoryId:this.categoryId,
                noOfQuestions:this.noOfQuestions,
                noOfSkipsAllowed:this.noOfSkipsAllowed,
                questions: this.$store.state.questionIdList,
                completed:false
          }
          this.$store.dispatch('sendDynamicContestDetails',{
              data: data
          })
      }
  },
  computed: {
    ...mapGetters(["question",'questionIdList',"giveCategories"])
    
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

#DCForm
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