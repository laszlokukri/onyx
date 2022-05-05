import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Filmek',
    component: Home
  },
  {
    path: '/sorozatok',
    name: 'Sorozatok',

    component: () => import('../views/Series.vue')
  },
  {
    path: '/film/:movieId',
    name: 'Movie',
    component: () => import('../views/Movie.vue'),
  },
  {
    path: '/keres/:srcT',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/filmnezes/:movieL',
    name: 'Watch',
    component: () => import('../views/Watch.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/filmfel',
    name: 'MovieUp',
    component: () => import('../views/MovieUp.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/bejelentkezes',
    name: 'Bejelentkezes',
    component: () => import('../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/regisztracio',
    name: 'Regisztráció',
    component: () => import('../views/Register.vue'),
    meta:{
      requiresGuest: true
    }
  }
  /* 
  requiresAuth: true
  */
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn) {
      next('/bejelentkezes');
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn) {
      next('/profil');
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
