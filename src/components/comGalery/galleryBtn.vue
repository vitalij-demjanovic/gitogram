<template>
    <button :class="['gallery-btn', {'hover-text': withHoverText}]"
      :data-hover-text="hoverText"
    >
      <slot></slot>
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
`
<style scoped src="./comGallery.css">

</style>
