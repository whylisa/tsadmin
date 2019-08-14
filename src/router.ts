import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/login/login.vue';
import HomeMain from './components/homeMain/homeMain.vue';
import Directive from './components/directive/directive.vue';

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
      component: Home,
children: [
{
path: '/homeMain',
name: 'homeMain',
component: HomeMain,
},
{
path: '/directive',
name: 'directive',
component: Directive,
},
],
    },
  ],
});
