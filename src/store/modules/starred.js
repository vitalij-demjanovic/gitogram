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
      state.starred = starred.map(item => {
        item.follow = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_LOADING (state, payload) {
      state.issues.loading = payload
    },
    SET_STAR (state, payload) {
      state.starred = state.starred.map(repo => {
        if (payload.id === repo.id) {
          repo.follow = {
            ...repo.follow,
            ...payload.starred
          }
        }
        return repo
      })
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
    async fetchFoll ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_STAR', {
        id,
        starred: {
          status: false,
          loading: true,
          error: ''
        }
      })
      try {
        await api.user.getStarRepo({ owner: owner.login, repo })
        commit('SET_STAR', {
          id,
          starred: {
            status: true
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_STAR', {
          id,
          starred: {
            status: false,
            loading: false
          }
        })
      }
    },
    async fetchUn ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('SET_STAR', {
        id,
        starred: {
          status: false,
          loading: true,
          error: ''
        }
      })
      try {
        await api.user.GetUnStarRepo({ owner: owner.login, repo })
        commit('SET_STAR', {
          id,
          starred: {
            status: true
          }
        })
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_STAR', {
          id,
          starred: {
            status: true,
            loading: false
          }
        })
      }
    }
  }
}
