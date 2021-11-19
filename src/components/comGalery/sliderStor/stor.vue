<template>
  <div class="stor-content">
    <div class="stor-content_progress">
      <progressBar v-if="active"></progressBar>
    </div>
    <div class="stor-content_user">
      <postUser :avatar="avatar" :user-name="name"></postUser>
    </div>
    <div class="stor-content_placeholder">
      <placeholder></placeholder>
    </div>
    <div class="stor-content_btn">
      <galleryBtn></galleryBtn>
    </div>
  </div>
</template>

<script>
import progressBar from '../../comGalery/progress/progressBar'
import postUser from '@/components/about/aboutComp/postUser/postUser'
import galleryBtn from '@/components/comGalery/button/galleryBtn'
import placeholder from '@/components/comGalery/placeholder/placeholder'

export default {
  name: 'stor',
  props: {
    active: Boolean,
    avatar: String,
    name: String
  },
  components: {
    progressBar,
    postUser,
    galleryBtn,
    placeholder
  }
}
</script>

<style scoped lang="css" src="./stor.css"></style>
