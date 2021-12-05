import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    user: [],
    repos: []
  },
  getters: {},
  mutations: {
    SET_USER_DATA (state, user) {
      state.user = user
    },
    SET_USER_REPO (state, repos) {
      state.repos = repos
    }
  },
  actions: {
    async fetchUser ({ commit }) {
      try {
        const { data } = await api.user.getUserData()
        commit('SET_USER_DATA', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchUserRepo ({ commit }) {
      try {
        const { data } = await api.user.getUserRepo()
        commit('SET_USER_REPO', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
    async logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
