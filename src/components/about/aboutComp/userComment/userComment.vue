<template>
  <div class="c-container">
    <div class="comments">
     <div class="comments-toogle">
       <toogler @onToogle="openComments"></toogler>
     </div>
      <div class="comments-wrapper" v-if="opened">
        <div class="comments-loading" v-if="$store.state.starred.issues.loading">
          <placeIssues></placeIssues>
        </div>
        <div class="comments-content" v-for="item in issues" :key="item.id">
            <span class="comments-content_user">{{ item.user.login }}</span>
            <p class="comments-content_text">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toogler from '@/components/about/aboutComp/toogler/toogler'
import placeIssues from '@/components/comGalery/placeholder/placeIssues'

export default {
  name: 'userComment',
  components: {
    placeIssues,
    toogler
  },
  props: {
    issues: {
      type: Array,
      default: () => []
    },
    ndx: String
  },
  emits: ['loadContent'],
  data () {
    return {
      opened: false
    }
  },
  methods: {
    openComments (isOpened) {
      this.opened = isOpened
      if (isOpened) {
        this.$emit('loadContent')
      }
    }
  }
}
</script>

<style lang="css" src="./userComment.css" scoped>

</style>
