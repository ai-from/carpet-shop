export default {
  state: {
    products: [],
    matchProducts: [],
    currentProduct: []
  },
  mutations: {
    SET_PRODUCTS(state: any, load: any){
      state.products = load
    },
    SET_MATCH_PRODUCTS(state: any, load: any){
      state.matchProducts = load
    },
    SET_CURRENT_PRODUCT(state: any, load: any){
      state.currentProduct = []
      state.currentProduct.push(load)
    }
  },
  actions: {
    SET_PRODUCTS({commit}: any, load: any){
      commit('SET_PRODUCTS', load)
    },
    SET_MATCH_PRODUCTS({commit}:any, load: any){
      commit('SET_MATCH_PRODUCTS', load)
    },
    SET_CURRENT_PRODUCT({commit}: any, load: any){
      commit('SET_CURRENT_PRODUCT', load)
    }
  },
  getters: {
    GET_PRODUCTS(state: any){
      return state.products
    },
    GET_MATCH_PRODUCTS(state: any){
      return state.matchProducts
    },
    GET_CURRENT_PRODUCT(state: any){
      return state.currentProduct
    }
  }
}