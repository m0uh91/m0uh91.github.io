import Vue from 'vue'
import Router from 'vue-router'
import Iframe from './../components/Iframe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Iframe',
      component: Iframe
    }
  ]
})
