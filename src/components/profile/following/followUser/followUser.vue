<template>
  <div class="f-container">
    <div class="following-wrapper">
      <div class="following-info">
        <img :src="avatar" alt="user" class="following-info_photo">
        <div class="info-items">
          <h3 class="info-items_name">{{ userName }}</h3>
          <span class="info-items_status">{{ position }}</span>
        </div>
      </div>
      <div class="following-btn">
       <followBtn
       @click="$emit('unFollow', idF)"
       ></followBtn>
      </div>
    </div>
  </div>
</template>

<script>
import followBtn from '@/components/profile/following/followBtn/followBtn'

export default {
  name: 'followUser',
  components: {
    followBtn
  },
  emits: ['unFollow'],
  props: {
    idF: Number,
    avatar: String,
    userName: String,
    position: String
  }
}
</script>

<style scoped lang="css" src="./followUser.css">

</style>
