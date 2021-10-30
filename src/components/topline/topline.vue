<template>
  <div class="header">
    <div class="h-container">
      <div class="nav-bar">
        <slot name="navBar"></slot>
      </div>
      <div class="stories" v-if="$slots.stories">
        <slot name="stories"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="css" src="./topline.css" scoped>

</style>
