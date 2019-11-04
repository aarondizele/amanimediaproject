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
      component: Home
    },
    {
      path: '/a-propos',
      component: () => import('./views/About.vue')
    },
    {
      path: '/article/:slug',
      component: () => import('./views/Article.vue')
    },
    {
      path: '/recherche',
      props: route => ({
          query: route.query.q
      }),
      component: () => import('./views/Result.vue')
    },
    {
      path: '/annonce/:id',
      component: () => import('./views/Annonce.vue')
    },
    {
      path: '/categorie/:slug',
      component: () => import('./views/Category.vue')
    },
    {
      path: '/info',
      component: () => import('./views/Info.vue')
    },
    {
      path: "**",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})
