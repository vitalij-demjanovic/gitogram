<template>
  <div class="t-gallery">
    <div class="h-container">
      <div class="nav-galley">
        <div class="logo">
          <icon name="logoWhite"></icon>
        </div>
        <button class="close">
          <router-link to="/">
            <icon name="close"></icon>
          </router-link>
        </button>
      </div>
    </div>
    <slider :initialSlide="Number($route.params.initialSlide)"></slider>
  </div>
</template>

<script>
import icon from '@/icons/icon'
import slider from '@/components/comGalery/slider/slider'

export default {
  name: 'gallery',
  components: {
    icon,
    slider
  }
}
</script>

<style scoped lang="css" src="./gallery.css">

</style>
