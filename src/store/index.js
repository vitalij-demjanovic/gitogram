import { createStore } from 'vuex'
import trendings from './modules/trendings'
import user from '@/store/modules/user'
import userStarred from '@/store/modules/userStarred'

export default createStore({
  modules: {
    trendings,
    user,
    userStarred
  }
})
