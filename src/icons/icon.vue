<template>
  <component :is="name"></component>
</template>

<script>
import * as icons from '../icons/variants'

export default {
  name: 'icon',
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>

<style scoped>

</style>
