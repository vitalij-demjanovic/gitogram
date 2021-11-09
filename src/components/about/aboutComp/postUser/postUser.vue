<template>
   <div class="post-user">
    <div class="post-user-avatar">
      <img :src="avatar" class="avatar-img" alt="avatar">
    </div>
    <div class="post-user-name">{{ userName }}</div>
   </div>

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

<style lang="css" src="./postUser.css" scoped></style>
