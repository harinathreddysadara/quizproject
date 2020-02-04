import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    categoryList:[],
    userDetails: {},
    questionList:[],
    registerDetails:[],
    roleDetails:[],
    updateRole:[],
    viewStatic:[],
    viewDynamic:[],
    leaderboard: [],
    staticData:{},
    questionIds:[],
    question:[],
    questionIdList:[],
    ratingList:[],
  
  
  },
  mutations: {
    SET_CATEGORIES_LIST(state,data){
      state.categoryList=data
    },
    SET_USER_DETAILS(state, data) {
      state.userDetails = data
    },
    SET_QUESTION_LIST(state,data)
    {
      state.questionList=data
    },
    SET_REGISTER_DETAILS(state,data){
      state.registerDetails=data
    },
    SET_ROLE_DETAILS(state,data){
      state.roleDetails=data
    },
    SET_UPDATEROLE_DETAILS(state,data){
      state.updateRole=data
    },
    SET_STATIC_VIEW(state,data)
    {
      state.viewStatic=data
    },
    SET_DYNAMIC_VIEW(state,data)
    {
      state.viewDynamic=data
    },
    SET_LEADERBOARD(state,data){
      state.leaderboard=data
  },
  SET_STATIC_DETAILS(state,data){
    state.staticData = data
  },
  question(state,data)
    {
      state.question=data;
    }
  },
  actions: {
    getCategories(context, {success, fail }){
      window.console.log('in get cat store')
      fetch('http://10.177.68.83:8080/contentservice/getCategories',{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }
      }).then(res => res.json())
      .then(res => {
      window.console.log('response',res)
      context.commit('SET_CATEGORIES_LIST',res)
      success && success(res)
      })
      .catch(err => {
      window.console.log(err)
      fail && fail()
      })
    },
    getQuestionByCategoryId: function (context,{data} ) {
      window.console.log('action',data)

      fetch('http://10.177.69.37:8098/scrapper/getQuestionsByCategory/'+data,{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }
      }).then(res => res.json())
      .then(res => {
      window.console.log(res)
      context.commit('SET_QUESTION_LIST',res)
      })
      .catch(err => {
      window.console.log(err)
      })
    },
    questionAdd(context,{data}){
      window.console.log(data)
      fetch('http://10.177.68.83:8080/contentservice/addQuestion',{
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
        
        }).then(res => res.json())
        .then(res => {
        window.console.log('hey',res)
      
        })
        .catch(err => {
        window.console.log(err)
        })
    },
    rejectQuestion(context,{data}){
      fetch('http://10.177.69.49:8080/contentservice/getQuestionsByCategory/',{
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
        }).then(res => res.json())
        .then(res => {
        window.console.log(res)
      
        })
        .catch(err => {
        window.console.log(err)
        })
    },
    loginUser(context, { data,success,fail}) {
      window.console.log([data]);
      fetch('http://172.16.20.32:8080/auth/signin',{
        // credentials:'include',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
      'Content-Type': 'application/json'
      }
      })
      .then(res => res.json())
      .then(res => {
      window.console.log(res)
      context.commit('SET_USER_DETAILS', {
      ...res
      })
      success && success(res)
      localStorage.setItem('accessToken',res.accessToken) 
      localStorage.setItem('tokenType',res.tokenType)
          })
          .catch(err => {
            window.console.log(err)
          fail && fail()
          })
  
      },
      Register(context, { data,success,fail }) {
        window.console.log([data]);
        fetch('http://172.16.20.32:8080/auth/signup',{
          // credentials:'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(res => {
        window.console.log(res)
        context.commit('SET_REGISTER_DETAILS', {
        ...res
        }
        
        ) 
        success && success(res)
            })
            .catch(err => {
              window.console.log(err)
              fail && fail()
            })
    
        },
        getRole(context,{data,success,fail}){
          window.console.log(data);
          let token="Bearer "+localStorage.getItem('accessToken')
          window.console.log(token)
        fetch('http://172.16.20.32:8080/jwt/getUserDetails',{
          // credentials:'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json',
        'authorization': token
        }
        })
        .then(res => res.json())
        .then(res => {
        window.console.log('in getRole funct',res.role)
        this.currentRole = res.role
        context.commit('SET_REGISTER_DETAILS', {
        ...res
        }
        
        ) 
        success && success(res)
        
            })
            .catch(err => {
              window.console.log(err)
             fail && fail()
            })
    
        },
        RoleUpdate(context,{data,success,fail}){
          window.console.log('in role update',data);
          let token='Bearer '+localStorage.getItem('accessToken')
        fetch('http://172.16.20.32:8080/role/updateRole',{
          // credentials:'include',
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json',
        'authorization': token
        }
        })
        .then(res => res.json())
        .then(res => {
        window.console.log(res)
        context.commit('SET_UPDATEROLE_DETAILS', {
        ...res
        }
        
        ) 
        success && success(res)
        
            })
            .catch(err => {
              window.console.log(err)
             fail && fail()
            })

        },
        viewStaticContest(context,{success,fail}){
          
          fetch('http://10.177.69.34:8084/contest/getStaticContestByAdmin/admin123',{
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          }
          })
          .then(res => res.json())
          .then(res => {
          window.console.log(res)
          context.commit('SET_STATIC_VIEW', {
          ...res
          }
          
          ) 
          success && success(res)
              })
              .catch(err => {
                window.console.log(err)
                fail && fail()
              })
      
        },
        viewDynamicContest(context,{success,fail}){
          fetch('http://10.177.69.34:8084/contest/getDynamicContestByAdmin/admin123',{
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          }
          })
          .then(res => res.json())
          .then(res => {
          window.console.log(res)
          context.commit('SET_DYNAMIC_VIEW', {
          ...res
          }
          
          ) 
          success && success(res)
              })
              .catch(err => {
                window.console.log(err)
                fail && fail()
              })
        },
        getLeaderBoardDetail(context,{data,success,fail}){
          window.console.log(data);
        fetch('http://172.16.20.32:8080/jwt/getUserDetails',{
          // credentials:'include',
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(res => {
        window.console.log(res)
        context.commit('SET_LEADERBOARD', {
        ...res
        }
        )
        success && success(res)
            })
            .catch(err => {
              window.console.log(err)
             fail && fail()
            })
        },
        addStaticQuiz(context,data){
          window.console.log(data)
          axios.post('http://10.177.69.34:8084/contest/addStaticContest',data)
          .then(response => {
            window.console.log('getting into axios')
            window.console.log(response);
            if(response=="yes")
              this.$alert('Quiz created')
            // success && success();
          });
        
        },
        getQuestions({commit},categoryId){
          // eslint-disable-next-line no-undef
          window.console.log('in get',categoryId);
          axios.get('http://10.177.68.83:8080/contentservice/getQuestionsByCategory/'+categoryId)
          .then(response =>{
            // eslint-disable-next-line no-console
            window.console.log(response);
            commit('question',response.data); //to send in mutation
          })
          .catch(error => {
            // eslint-disable-next-line no-console
            window.console.log(error)
          })
        },
        sendDynamicContestDetails(context,{data}){
          window.console.log(data)
          axios.post('http://10.177.69.34:8084/contest/addDynamicContest',data)
          .then(response => {
            window.console.log(response);
          });
        },
        Rating()
        {
          window.console.log('i action',this.state.ratingList)
          axios.put('http://10.177.68.83:8080/contentservice/setQuestionRating',this.state.ratingList)
          .then(response =>{
            window.console.log(response)
          })
        }
        
      

  },
  getters:{
     giveCategories(state){
       return state.categoryList
     },
     getQuestionByCategory(state)
     {
       return state.questionList
     },
     getStaticContests(state){
       return state.viewStatic
     },
     getDynamicContests(state){
      return state.viewStatic
    },
    getLeaderBoard(state) {
      return state.leaderBoard
    },
    getQuestionIds(state){
      window.console.log('in save',this.state.questionIds)
       return state.questionIds
       
     },
     question(state){
      window.console.log()
      return state.question || []
    },
    questionIdList(state)
    {
      window.console.log(state.questionIdList)
      return state.questionIdList || []
    }
  },
  modules: {
  }
})
