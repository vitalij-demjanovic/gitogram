import { createStore } from 'vuex'
import trendings from './modules/trendings'
import user from '@/store/modules/user'
import starred from '@/store/modules/starred'

export default createStore({
  modules: {
    trendings,
    user,
    starred
  }
})
