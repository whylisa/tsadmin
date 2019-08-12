import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/login/login.vue';
import HomeMain from './components/homeMain/homeMain.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Home,
			children: [
				{
					path: '/homeMain',
					name: 'homeMain',
					component: HomeMain,
					meta:{
						title:"首页"
					}
				},
			]
    }
  ]
});
