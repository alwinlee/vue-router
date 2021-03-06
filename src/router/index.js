import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Travels from '../views/Travels.vue'
import Spain from '../components/Spain.vue'
import Finland from '../components/Finland.vue'
import Czech from '../components/Czech.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/travels',
    name: 'Travels',
    component: Travels, //() => import(/* webpackChunkName: "about" */ '../views/Travels.vue'),
    children: [
      { path: 'spain', name: 'spain', component: Spain },
      { path: 'finland', name: 'finland', component: Finland },
      { path: 'czech', name: 'czech', component: Czech },
    ]
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
