import * as api from '@/api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  mutations: {
    SET_TRENDINGS (state, trendings) {
      state.data = trendings
    },
    SET_README (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrending ({ commit }) {
      try {
        const { data } = await api.trendings.getTrending()
        commit('SET_TRENDINGS', data.items)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) {
        return
      }
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
