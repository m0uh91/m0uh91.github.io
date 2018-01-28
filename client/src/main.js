import Vue from 'vue'
import ElementUi from 'element-ui'
import VueFire from 'vuefire'
import VModal from 'vue-js-modal'
import 'element-ui/lib/theme-chalk/index.css'
import './config/base'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueFire)
Vue.use(VModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
