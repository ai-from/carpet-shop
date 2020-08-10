import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/index'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import '@/styles/common.sass'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.component('v-icon', Icon)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDnFzrmN9U_cwRFeOdxzcSvR8csAydIy7E",
  authDomain: "carpet-shop-3c4c1.firebaseapp.com",
  databaseURL: "https://carpet-shop-3c4c1.firebaseio.com",
  projectId: "carpet-shop-3c4c1",
  storageBucket: "carpet-shop-3c4c1.appspot.com",
  messagingSenderId: "495744356998",
  appId: "1:495744356998:web:b848ffa97ffc5179de3707"
};

firebase.initializeApp(firebaseConfig);

let app: any

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
