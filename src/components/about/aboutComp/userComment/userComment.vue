<template>
  <div class="c-container">
    <div class="comments">
      <button :class="['comments-btn', { active: isOpened }]" @click="toogle">
        <p class="comments-btn_txt">{{ isOpened ? 'Hide' : 'View' }} issues</p>
        <span class="comments-btn_icon">
          <icon name="arrow"></icon>
        </span>
      </button>
      <div :class="['comments-wrapper', { active: isOpened }]" v-for="issue in issues" :key="issue.id">
        <div class="comments-content" >
          <span class="comments-content_user">{{ issue.user.login }}</span>
          <p class="comments-content_text">{{ issue.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'userComment',
  components: {
    icon
  },
  props: {
    issues: {
      type: Array,
      default: () => []
    }
  },
  emits: ['loadContent'],
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toogle () {
      this.isOpened = !this.isOpened
      this.$emit('loadContent')
      console.log(this.issues)
    }
  }
}
</script>

<style lang="css" src="./userComment.css" scoped>

</style>
