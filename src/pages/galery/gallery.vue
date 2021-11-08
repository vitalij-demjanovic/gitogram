<template>
  <div class="galleys">
    <div class="c-container">
      <div class="gallery">
        <div class="gallery-progress">
          <progressBar></progressBar>
        </div>
        <div class="gallery-user" >
          <postUser :avatar="posts[0].avatar" :user-name="posts[0].userName"></postUser>
        </div>
        <div class="gallery-wrapper">
          <div class="gallery-des">
            <img class="gallery-des_img" src="../../../public/image/storyBack.png" alt="storybook">
            <p class="gallery-des_text">
              <b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.
            </p>
            <p class="gallery-des_text">
              For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
            </p>
            <p class="gallery-des_text">
              In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
            </p>
            <p class="gallery-des_text">
              For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
            </p>
            <p class="gallery-des_text">
              In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms
            </p>
          </div>
        </div>
        <div class="gallery-btn">
          <galleryBtn></galleryBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postUser from '@/components/about/aboutComp/postUser/postUser'
import posts from '@/posts.json'
import progressBar from '@/components/comGalery/progress/progressBar'
import galleryBtn from '@/components/comGalery/button/galleryBtn'

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
