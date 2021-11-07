<template>
    <button :class="['gallery-btn', `theme-green`, {'hover-text': withHoverText}]"
      :data-hover-text="hoverText">
      <span class="btn-txt">
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

<style scoped src="./comGallery.css">

</style>
