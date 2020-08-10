export default {
  state: {
    basket: []
  },
  mutations: {
    ADD_TO_BASKET(state: any, load: any){
      if (state.basket.length === 0){
        load.ordered++
        load.stock = load.quantity - load.ordered
        state.basket.push(load)
      } else {
        var flag = false
        for (var i = 0; i < state.basket.length; i++) {
          if (load.id === state.basket[i].id) {
            flag = true
            break
          }
        }
        if(flag) {
          state.basket[i].ordered += 1
          state.basket[i].stock = state.basket[i].quantity - state.basket[i].ordered
          flag = false
        } else {
          load.ordered++
          load.stock = load.quantity - load.ordered
          state.basket.push(load)
        }
      }
    },
    REMOVE_FROM_BASKET(state: any, load: any){
      for (var i = 0; i < state.basket.length; i++) {
        if (load.id === state.basket[i].id) {
          if ((state.basket[i].ordered) * 1 > 1) {
            state.basket[i].stock++
            state.basket[i].ordered--
          } else {
            state.basket[i].stock++
            state.basket[i].ordered--
            state.basket.splice(i, 1)
          }
        }
      }
    },
    REMOVE_ITEM_FROM_BASKET(state: any, load: any){
      for (var i = 0; i < state.basket.length; i++){
        if (load.id === state.basket[i].id){
          state.basket[i].stock = state.basket[i].quantity
          state.basket[i].ordered = 0
          state.basket.splice(i, 1)
        }
      }
    },
    CLEAR_BASKET(state: any){
      for (var i = 0; i < state.basket.length; i++){
        state.basket[i].ordered = 0
      }
      state.basket = []
    }
  },
  actions: {
    ADD_TO_BASKET({commit}: any, load: any){
      commit('ADD_TO_BASKET', load)
    },
    REMOVE_FROM_BASKET({commit}: any, load: any){
      commit('REMOVE_FROM_BASKET', load)
    },
    REMOVE_ITEM_FROM_BASKET({commit}: any, load: any){
      commit('REMOVE_ITEM_FROM_BASKET', load)
    },
    CLEAR_BASKET({commit}: any){
      commit('CLEAR_BASKET')
    }
  },
  getters: {
    GET_BASKET(state: any){
      return state.basket
    },
    GET_ORDERED_QUANTITY_BASKET(state: any){
      var tmp = 0
      for (var i = 0; i < state.basket.length; i++){
        tmp += state.basket[i].ordered * 1
      }
      return tmp
    },
    GET_ORDERED_PRICE_BASKET(state: any){
      var tmp = 0
      for (var i = 0; i < state.basket.length; i++){
        tmp += (state.basket[i].ordered * 1) * state.basket[i].price
      }
      return tmp
    }
  }
}