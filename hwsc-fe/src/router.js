/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 15:19:03
 * @LastEditTime: 2019-09-28 15:48:18
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home

    },
    {
      path: "/category",
      name: "category",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
    },
		{
			path: '/content',
			name: 'content',
			component: () => import(/* webpackChunkName: "about" */ './views/Content.vue')
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import(/* webpackChunkName: "about" */ './views/Cart.vue')
		},
		{
			path: '/personal',
			name: 'personal',
			component: () => import(/* webpackChunkName: "about" */ './views/Personal.vue')
		},
		{
			path: '/testa',
			name: 'testa',
			component: () => import(/* webpackChunkName: "about" */ './component/xiangqing.vue')
    },
    
    {
      path: "/jiesuan",
      name: "jiesuan",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/jiesuan.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/login.vue")
    },
    {
      path: "/msglogin",
      name: "msglogin",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/msglogin.vue")
    }
  ]
});
