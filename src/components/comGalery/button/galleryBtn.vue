<template>
    <button :class="['gallery-btn', {'hover-text': withHoverText}]" :data-hover-text="hoverText">
      <span  class="btn-text" hover-text="Unfollow">
        Follow
        <slot></slot>
      </span>
    </button>
</template>

<script>

export default {
  name: 'galleryBtn',
  props: {
    hoverText: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style scoped src="./button.css"></style>
