import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/travels',
    name: 'Travels',
    component: () => import(/* webpackChunkName: "about" */ '../views/Travels.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  //{
  //  path: '/:catchAll(.*)',
  //  redirect: '/404'
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
 if (!to.matched.length) {
   next('/404')
 } else {
   next()
 }
 //next(); // next(false); // next('/'); // next({ path: '/' });
})

export default router
