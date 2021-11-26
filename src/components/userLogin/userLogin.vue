<template>
  <img :src="$store.state.user.user.avatar_url" alt="User" style="border-radius: 50%">
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'userLogin',
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

<style scoped lang="css" src="./userLogin.css">

</style>
