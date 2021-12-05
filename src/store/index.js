import { createStore } from 'vuex'
import trendings from './modules/trendings'
import user from '@/store/modules/user'
import starred from '@/store/modules/starred'

export default createStore({
  getters: {
    getUnStarredOnly (state) {
      return state.trendings.data.filter((trendingsRepos) => {
        return !state.starred.starred.some((starredRepo) => {
          return trendingsRepos.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    trendings,
    user,
    starred
  }
})
