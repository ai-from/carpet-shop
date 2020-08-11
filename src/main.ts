import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import '@/styles/common.sass'

Vue.component('v-icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
