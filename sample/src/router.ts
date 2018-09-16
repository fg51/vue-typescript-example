import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ViewA from './views/A.vue';
import ViewB from './views/B.vue';
import ViewC from './views/C.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/a',
      name: 'a',
      component: () => import('./views/A.vue'),
    },
    {
      path: '/b',
      name: 'b',
      component: () => import('./views/B.vue'),
    },
    {
      path: '/c',
      name: 'c',
      component: () => import('./views/C.vue'),
    },
  ],
});
