<template>
  <div class="rating">
    <div class="rating-like" @click="like += 1">
      <icon name="star"></icon>
      <p class="rating-like_paragraph">Star</p>
    </div>
    <span class="rating-counter_like">{{ like }}k</span>
    <div class="rating-loop" @click="fork += 1">
      <icon name="loop"></icon>
      <p class="rating-like_paragraph">Fork</p>
    </div>
    <span class="rating-counter_loop">{{ fork }}</span>
  </div>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'rating',
  components: {
    icon
  },
  data () {
    return {
      like: 156,
      fork: 4
    }
  }
}
</script>

<style lang="css" src="./aboutComp.css" scoped>

</style>
