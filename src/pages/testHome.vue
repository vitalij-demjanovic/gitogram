<template>
  <pre></pre>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'testHome',
  computed: {
    ...mapState({
      user: state => state.user.data
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

<style scoped lang="css">
  body {
    background: #586069;
  }
</style>
