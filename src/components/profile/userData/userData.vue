<template>
  <div class="profile-data">
    <div class="data-photo">
      <img :src="avatar" alt="avatar" class="photo-img">
    </div>
    <div class="data-item">
      <h1 class="data-item_name">{{ userName }}</h1>
      <div class="data-item_links">
          <span class="link-repo" @click="goTuRepo"><b style="font-size: 14px;">{{ repos }}</b> repos</span>
          <span class="link-watchers" @click="goTuFollowing"><b style="font-size: 14px">{{ watches }}</b> watchers</span>
      </div>
      <span class="data-item_fullName">{{ fullName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userData',
  methods: {
    goTuFollowing () {
      this.$router.push({ name: 'following' })
    },
    goTuRepo () {
      this.$router.push({ name: 'reposs' })
    }
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: String,
    repos: Number,
    watches: Number,
    fullName: String
  }
}
</script>

<style scoped lang="css" src="./userData.css">

</style>
