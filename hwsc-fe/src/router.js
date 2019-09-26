import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
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
		}
  ]
})
