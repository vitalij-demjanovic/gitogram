<template>
  <div class="progress-bar"></div>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    active: String
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped lang="css" src="./progress.css"></style>
