import Vue from 'vue'
import App from './app.vue'
import router from './roteador'
import store from './loja'
import pageTitle from '@/tools/page-title'

Vue.mixin(pageTitle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
