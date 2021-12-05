import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    starred: [],
    issues: {
      loading: false,
      data: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.starred.find(item => item.id === id)
    }
  },
  mutations: {
    SET_USER_STARRED (state, starred) {
      state.starred = starred
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
        return data
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    async fetchUnfollow ({ commit, getters }, id) {
      // const { name: repo, owner } = getters.getRepoById(id)
      console.log('id', id)
    }
  }
}
