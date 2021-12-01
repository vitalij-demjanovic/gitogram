import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    starred: [],
    issues: {
      loading: false
    }
  },
  getters: {
  },
  mutations: {
    SET_USER_STARRED (state, starred) {
      state.starred = starred
    },
    SET_USER_ISSUES (state, issues) {
      state.issues.data = issues
    },
    SET_LOADING (state, payload) {
      state.issues.loading = payload
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
    async fetchIssues ({ commit }, { id, owner, repo }) {
      commit('SET_LOADING', true)
      try {
        const { data } = await api.user.getIssues({ id, owner, repo })
        commit('SET_USER_ISSUES', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}
