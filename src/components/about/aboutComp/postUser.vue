<template>
   <button class="post-user-btn">
    <div class="post-user-avatar">
      <img :src="avatar" class="avatar-img" alt="avatar">
    </div>
    <div class="post-user-name">{{ userName }}</div>
   </button>

</template>

<script>
export default {
  name: 'postUser',
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

<style lang="css" src="./aboutComp.css" scoped>

</style>
