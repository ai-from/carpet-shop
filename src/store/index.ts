import Vue from 'vue'
import Vuex from 'vuex'

import mCatalog from './modules/mCatalog'
import mBasket from './modules/mBasket'
import mLogin from './modules/mLogin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    mCatalog,
    mBasket,
    mLogin
  }
})
