<template>
  <feeds></feeds>
  <gallery></gallery>
</template>

<script>
import { feeds } from '@/pages/feeds'
import gallery from '@/pages/galery/gallery'
export default {

  name: 'App',
  components: {
    feeds,
    gallery
  }
}

</script>

<style lang="css" src="./global.css"></style>
