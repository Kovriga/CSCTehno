import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    params: '',
    sort: false,
    search: '',
  },
  getters: {
  },
  mutations: {
    setParamsSearch(state, item) {
      state.params = item
    },
    getSort(state, item) {
      state.sort = item
    },
    getSearch(state, item) {
      state.search = item
    }
  },
  actions: {
  },
  modules: {
  }
})
