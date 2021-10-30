<template>
  <div class="c-container">
    <div class="comments">
      <button :class="['comments-btn', { active: isOpened }]" @click="toogle">
        <p class="comments-btn_txt">{{ isOpened ? 'Hide' : 'View' }} issues</p>
        <span class="comments-btn_icon">
          <icon name="arrow"></icon>
        </span>
      </button>
      <div :class="['comments-wrapper', { active: isOpened }]" >
        <div class="comments-content" v-for="comment in comments" :key="comment.id">
          <span class="comments-content_user">{{ comment.userName }}</span>
          <p class="comments-content_text">{{ comment.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon'
import comments from '../../../comments.json'

export default {
  name: 'userComment',
  components: {
    icon
  },
  props: {
    comment: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isOpened: false,
      comments
    }
  },
  methods: {
    toogle () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style lang="css" src="./aboutComp.css" scoped>

</style>
