import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'
import Drawer from './views/Drawer.vue'
import Cards from './views/Cards.vue'
import Simple from './views/Simple.vue'
import Stagger from './views/Stagger.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: Drawer
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: Stagger
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/List.vue')
    }
  ]
})
