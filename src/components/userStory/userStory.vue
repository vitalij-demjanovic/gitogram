<template>
  <div class="user-story-content">
    <div class="avatar">
      <img :src="avatar" class="avatar-img" alt="avatar">
    </div>
    <div class="user-name">{{ userName }}</div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" src="./userStory.css" scoped>

</style>
