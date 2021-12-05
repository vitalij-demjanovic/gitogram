<template>
  <div class="h-container">
    <div class="profile">
      <div class="profile-info">
        <h1 class="profile-title">My Profile</h1>
        <userData
          :avatar="user.user.avatar_url"
          :user-name="user.user.login"
          :repos="user.user.public_repos"
          :watches="starred.length"
          :full-name="user.user.name"
        ></userData>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import userData from '@/components/profile/userData/userData'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  name: 'profile',
  components: {
    userData
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch('user/fetchUser')
      dispatch('starred/fetchStarred')
    })
    return {
      user: computed(() => state.user),
      starred: computed(() => state.starred.starred)
    }
  }
}
</script>

<style scoped lang="css" src="./profile.css"></style>
