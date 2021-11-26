import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    starred: []
  },
  getters: {},
  mutations: {
    SET_USER_STARRED (state, starred) {
      state.starred = starred
    }
  },
  actions: {
    async fetchStarred ({ commit }) {
      try {
        const { data } = await api.user.getUserLaiks()
        commit('SET_USER_STARRED', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
