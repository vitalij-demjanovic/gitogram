<template>
  <div class="header">
    <div class="h-container">
      <div class="nav-bar">
        <slot name="nav-bar"></slot>
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

<style lang="css" src="header.css" scoped>

</style>
