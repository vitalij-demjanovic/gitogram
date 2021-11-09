<template>
    <button :class="['gallery-btn', {'hover-text': isActive}]"  @click="isActive = !isActive">
      <span  class="btn-text">
        {{ isActive ? 'Unfollow' : 'Follow' }}
      </span>
    </button>
</template>

<script>

export default {
  name: 'galleryBtn',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped src="./button.css"></style>
