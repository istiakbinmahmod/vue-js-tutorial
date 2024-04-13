import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Jobs from '../views/jobs/Jobs.vue';
import JobDetails from '../views/jobs/JobDetails.vue';
import NotFound from '../views/404.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
