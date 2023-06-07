import { createStore } from 'vuex'

export default createStore({
  strict: true,   // will prevent any changes on the state outside mutaions.
  state: {
    products: [
      { name: 'Banana Skin', price: 20 },
      { name: 'Shiny Star', price: 40 },
      { name: 'Green Shells', price: 60 },
      { name: 'Red Shells', price: 80 },
    ]
  },
  getters: {
    saleProducts(state) {
      return state.products.map(p => {
        return { name: '**' + p.name + '**', price: p.price/2 }
      })
    }
  },
  // when using async code inside mutations its will be hard to track the changes
  mutations: {
    reducePrice(state, payload) {
      state.products.forEach(product => product.price -= payload);
    }
  },
  actions: {
    reducePrice(context, payload) {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000);
    }
  },
  modules: {
  }
})
