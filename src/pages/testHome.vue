<template>
  <h1>Vitalij</h1>
  <ul>
    <li
    v-for="dat in data"
    :key="dat.id"
    >
      <stor
      :avatar="dat.owner.avatar_url"
      :name="dat.owner.login"
      :content="dat.owner.repos_url"
      >
      </stor>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import stor from '@/components/comGalery/sliderStor/stor'

export default {
  name: 'testHome',
  components: {
    stor
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrending: 'fetchTrending'
    }),
    getData (obj) {
      return {
        avatar: obj.owner.avatar_url,
        name: obj.owner.login
      }
    }
  },
  async created () {
    await this.fetchTrending()
  }
}
</script>

<style scoped lang="css">
  body {
    background: #586069;
  }
</style>
