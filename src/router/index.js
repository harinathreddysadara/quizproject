import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import store from '../store'


Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/rating',
    name: 'rating',
    component: () => import('@/views/Rating.vue'),
    meta:{
      requiresAuth:true
    },
    beforeRouteLeave : (to, from, next) => {
      if(this.requiresAuth==true) {
          next('/login');
      } else {
          next();
      }
  }
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/error.vue')
  },
  {
    path: '/validation',
    name: 'validation',
    component: () => import('@/views/Validation.vue'),
    meta:{
      requiresAuth:true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/againregister',
    name: 'againregister',
    component: () => import('@/views/againRegister.vue')
  },
  {
    path: '/quizMaster',
    name: 'quizMaster',
    component: () => import('@/views/quizMaster.vue'),
    meta:{
      requiresAuth:true
    },
    
      
  
  },
  {
    path: '/createStatic',
    name: 'createStatic',
    component: () => import('@/views/StaticQuiz.vue')
  },
  {
    path: '/createDynamic',
    name: 'createDynamic',
    component: () => import('@/views/DynamicQuiz.vue')
  },
  {
    path: '/viewStaticContest',
    name: 'viewStaticContest',
    component: () => import('@/views/viewStaticContest.vue')
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import('@/views/Leaderboard.vue')
  },
  {
    path: '/viewDynamicContest',
    name: 'viewDynamicContest',
    component: () => import('@/views/viewStaticContest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
// router.beforeEach((to, from, next) => {
//   let role = store.state.updateRole.role
//   if (authenticationCheck(to) && role=='admin') {
//     next('/admin');
//   } else if (authenticationCheck(to) && role=='validator') {
//     next('/validation');
//   } 
//   else if (authenticationCheck(to) && role=='quizMaster') {
//     next('/quizMaster');
//   } 
//   else if (authenticationCheck(to) && role=='ranker') {
//     next('/rating');
//   } 
// })

// function authenticationCheck(route) {
//   let flag = false
//   if (route.meta.requiresAuth === true) {
//     flag = true
//   } else {
//     flag = false
//   }
//   return flag
// }
