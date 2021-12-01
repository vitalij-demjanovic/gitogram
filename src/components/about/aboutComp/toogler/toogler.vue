<template>
  <button :class="['comments-btn', { active: isOpened }]" @click="toogle">
    <p class="comments-btn_txt">{{ isOpened ? 'Hide' : 'View' }} issues</p>
    <span class="comments-btn_icon">
      <icon name="arrow"></icon>
    </span>
  </button>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'toogler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toogle () {
      this.isOpened = !this.isOpened
      this.$emit('onToogle', this.isOpened)
    }
  }
}
</script>

<style scoped lang="css" src="./toogler.css"></style>
