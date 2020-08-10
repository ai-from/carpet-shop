export default {
  state: {
    isLogin: false
  },
  mutations: {
    CHANGE_LOGIN(state: any){
      state.isLogin = !state.isLogin
    }
  },
  actions: {
    CHANGE_LOGIN({commit}: any){
      commit('CHANGE_LOGIN')
    }
  },
  getters: {
    GET_IS_LOGIN(state: any){
      return state.isLogin
    }
  }
}