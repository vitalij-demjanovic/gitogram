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
    <slider></slider>
  </div>
</template>

<script>
import icon from '@/icons/icon'
import slider from '@/components/comGalery/slider/slider'
import * as api from '@/api'

export default {
  name: 'gallery',
  components: {
    icon,
    slider
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrending()
      this.items = data.items
      console.log(data.items)
    } catch (err) {
      console.log('error')
    }
  }
}
</script>

<style scoped lang="css" src="./gallery.css">

</style>
