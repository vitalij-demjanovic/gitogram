<template>
  <button :class="['follow-btn', theme]">
    <div class="pre-white" v-if="loading">
      <icon name="preWhite"></icon>
    </div>
    <p  class="btn-text" v-else>
      unfollow
      <slot></slot>
    </p>
  </button>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'followBtn',
  components: {
    icon
  },
  data () {
    return {
      grey: 'grey',
      green: 'green'
    }
  },
  props: {
    theme: String,
    loading: Boolean
  }
}
</script>

<style scoped lang="css" src="./followBtn.css">

</style>
