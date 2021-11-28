import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {},
  mutations: {
    SET_USER_STARRED (state, starred) {
      state.data = starred
    },
    SET_USER_ISSUES (state, issues) {
      state.data = issues
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
    },
    async fetchIssues ({ commit }, { owner, repo }) {
      try {
        const { data } = await api.user.getIssues({ owner, repo })
        commit('SET_USER_ISSUES', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
