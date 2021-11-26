<template>
    <button :class="['gallery-btn', {'hover-text': withHoverText}, {'grey': disabled}]" :data-hover-text="hoverText">
      <div class="pre-white" v-if="loading">
        <icon name="preWhite"></icon>
      </div>
      <p  class="btn-text" hover-text="unfollow" v-else>
        follow
        <slot></slot>
      </p>
    </button>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'galleryBtn',
  components: {
    icon
  },
  props: {
    hoverText: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style scoped src="./button.css"></style>
