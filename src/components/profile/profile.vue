<template>
  <div class="h-container">
    <div class="profile">
      <userData
        :avatar="$store.state.user.user.avatar_url"
        :user-name="$store.state.user.user.login"
        :repos="$store.state.user.user.public_repos"
        :watches="$store.state.user.user.followers"
        :full-name="$store.state.user.user.name"
      ></userData>
    </div>
  </div>

</template>

<script>
import userData from '@/components/profile/userData/userData'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'profile',
  components: {
    userData
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser'
    })
  },
  async created () {
    await this.fetchUser()
  }
}
</script>

<style scoped lang="css" src="./profile.css"></style>
