<template>
  <div class="c-container">
    <div class="comments">
     <div class="comments-toogle">
       <toogler @onToogle="openComments"></toogler>
     </div>
      <div class="comments-wrapper" v-if="issues && opened">
        <div class="comments-loading" v-if="$store.state.starred.issues.loading">
          <placeIssues></placeIssues>
        </div>
        <div class="comments-content" v-for="issue in issues" :key="issue.id">
          <span class="comments-content_user">{{ issue.user.login }}</span>
          <p class="comments-content_text">{{ issue.title }}</p>
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
    loading: Boolean,
    issues: {
      type: Array,
      default: () => [],
      extra: () => []
    }
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
      if (isOpened && this.issues.length === 0) {
        this.$emit('loadContent')
      }
    }
  }
}
</script>

<style lang="css" src="./userComment.css" scoped>

</style>
