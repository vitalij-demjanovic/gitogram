<template>
<div v-for="item in items" :key="item.id">
  <h1>{{ item.title }}</h1>
  <h2>username: {{ item.username }}</h2>
  <h3>stars: {{ item.forks }}</h3>
  <h3>stars: {{ item.stargazers_count }}</h3>
  <p v-if="description">description: {{ description }}</p>
</div>
</template>

<script>
import * as api from '../../api'

export default {
  name: 'api',
  data () {
    return {
      items: []
    }
  },
  props: {
    title: String,
    username: String,
    stargazers_count: Number,
    forks: Number,
    description: String,
    dark: Boolean
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
