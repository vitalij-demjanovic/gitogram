<template>
  <div class="stor-content">
    <div class="stor-content_progress">
      <progressBar v-if="active"></progressBar>
    </div>
    <div class="stor-content_user">
      <postUser :avatar="avatar" :user-name="name"></postUser>
    </div>
    <div class="stor-content_text" >
      <div class="content-text" v-if="content" v-html="content"></div>
      <preloader v-else-if="loading"></preloader>
      <placeholder v-else></placeholder>
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
import preloader from '@/components/comGalery/preloader/preloader'

export default {
  name: 'stor',
  props: {
    active: Boolean,
    loading: Boolean,
    avatar: String,
    name: String,
    content: {
      type: String,
      required: true
    }
  },
  emits: ['onFollow'],
  components: {
    progressBar,
    postUser,
    galleryBtn,
    preloader,
    placeholder
  }
}
</script>

<style scoped lang="css" src="./stor.css"></style>
