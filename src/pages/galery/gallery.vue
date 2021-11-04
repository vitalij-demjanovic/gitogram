<template>
  <div class="c-container">
    <div class="gallery-progress">
      <progressBar></progressBar>
    </div>
    <div class="gallery-user" >
      <postUser :avatar="posts[0].avatar" :user-name="posts[0].userName"></postUser>
    </div>
    <div class="gallery-des">

    </div>
    <galleryBtn></galleryBtn>
  </div>
</template>

<script>
import postUser from '@/components/about/aboutComp/postUser'
import posts from '@/posts.json'
import progressBar from '@/components/comGalery/progressBar'
import galleryBtn from '@/components/comGalery/galleryBtn'

export default {
  name: 'gallery',
  components: {
    postUser,
    progressBar,
    galleryBtn
  },
  data () {
    return {
      posts
    }
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

<style scoped lang="css" src="./gallery.css"></style>
