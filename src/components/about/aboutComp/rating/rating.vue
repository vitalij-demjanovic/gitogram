<template>
  <div class="c-container">
    <slot name="rating"></slot>
  </div>
</template>

<script>
import * as api from '../../../../api'

export default {
  name: 'rating',

  data () {
    return {
      items: []
    }
  },
  props: {
    stargazers_count: Number,
    forks: Number
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrending()
      this.items = data.items
      console.log(data.items)
    } catch (err) {
      console.log('error')
    }
  }
}
</script>
