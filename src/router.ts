import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/login/login.vue';
import HomeMain from './views/homeMain/homeMain.vue';
import Directive from './components/directive/directive.vue';
import Mixins from './components/mixins/mixin.vue';
import Props from './components/prop/props.vue';

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
        {
          path: '/mixins',
          name: 'mixins',
          component: Mixins,
        },
        {
          path: '/props',
          name: 'props',
          component: Props,
        },
      ],
    },
  ],
});
