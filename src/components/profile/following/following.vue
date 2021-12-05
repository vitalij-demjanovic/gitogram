<template>
  <div class="c-following">
    <div class="following-head">
      <h1 class="following-title">Following</h1>
      <span class="following-head-span">{{ starred.length }}</span>
    </div>
    <div class="following-list" v-for="item in starred" :key="item.id">
        <followUser
          :avatar="item.owner.avatar_url"
          :user-name="item.owner.login"
          :position="item.owner.type"
          :id-f="item.id"
          @unFollow="callBack"
        ></followUser>
    </div>
  </div>
</template>

<script>
import followUser from '@/components/profile/following/followUser/followUser'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  name: 'following',
  components: {
    followUser
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch('starred/fetchStarred')
    })
    const callBack = () => {
      dispatch('starred/fetchUnfollow')
    }
    return {
      starred: computed(() => state.starred.starred),
      callBack
    }
  }
}
</script>

<style scoped lang="css" src="./following.css">

</style>
