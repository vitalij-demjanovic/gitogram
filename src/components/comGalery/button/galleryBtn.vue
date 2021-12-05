<template>
    <button :class="['gallery-btn', theme,]">
      <div class="pre-white" v-if="loading">
        <icon name="preWhite"></icon>
      </div>
      <p  class="btn-text" v-else>
        <slot></slot>
      </p>
    </button>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'galleryBtn',
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
    loading: Boolean,
    disabled: Boolean
  }
}
</script>

<style scoped src="./button.css"></style>
