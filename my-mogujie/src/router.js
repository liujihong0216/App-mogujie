import Vue from 'vue'
import Router from 'vue-router'
// import Index from './components/Index/index.vue';
// import Market from './components/Index/market.vue';
// import Search from './components/Index/search.vue';
// import Marketsearch from './components/Index/marketsearch.vue';
// import Login from './components/Index/login.vue';
// import Zhibo from './components/Zhibo/zhibo.vue';
// import Wo from './components/My/wo.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/bottom_store',
      name:'bottom_store',
      component : () =>
      import ("./components/Market/bottom_store.vue")
    },
    {
      path: '/index',
      name: 'index',
      component: () => 
      import ("./components/Index/index.vue")
    },
    
    {
      path: '/market',
      name: 'market',
      component:() => 
      import("./components/Index/market.vue")
    },
    {
      path: '/search',
      name: 'search',
      component: () =>
      import ("./components/Index/search.vue")
    },
    {
      path: '/marketsearch',
      name: 'marketsearch',
      component:() =>
      import ("./components/Index/marketsearch.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
      import("./components/Index/login.vue")
    },
    {
      path: '/zhibo',
      name: 'zhibo',
      component: () =>
      import ("./components/Zhibo/zhibo.vue")
    },
    {
      path: '/wo',
      name: 'wo',
      component: () =>
      import ("./components/My/wo.vue")
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
