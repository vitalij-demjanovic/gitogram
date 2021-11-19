<template>
  <topLine>
    <template #navBar>
      <div class="nav-bar">
        <div class="logo">
          <icon name="logo"></icon>
        </div>
        <div class="login-nav">
          <button class="home">
            <icon name="home"></icon>
          </button>
          <div class="log-photo">
            <button class="log-user-icon">
              <userLogin></userLogin>
            </button>
          </div>
          <button class="log-out">
            <icon name="logOut"></icon>
          </button>
        </div>
      </div>
    </template>
    <template #stories>
      <ul class="stories-item">
        <li class="story" v-for="item in items" :key="item.id" @click="gallery">
          <userStory :avatar="item.owner.avatar_url" :user-name="item.name"></userStory>
          <router-link to="/gallery"></router-link>
        </li>
      </ul>
    </template>
  </topLine>
  <about></about>
</template>

<script>
import topLine from '../../components/topline/topline'
import icon from '../../icons/icon'
import userStory from '@/components/userStory/userStory'
import about from '../../components/about/about'
import stories from '../../data.json'
import userLogin from '@/components/userLogin/userLogin'
import * as api from '@/api'

export default {
  name: 'feeds',
  components: {
    topLine,
    icon,
    userStory,
    about,
    userLogin
  },
  props: {
    owner: String,
    avatar_url: String,
    name: String
  },
  methods: {
    gallery () {
      this.$router.push('/gallery')
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrending()
      this.items = data.items
      console.log(data.items)
    } catch (err) {
      console.log('error')
    }
  },
  data () {
    return {
      stories,
      items: []
    }
  }
}
</script>

<style lang="css" src="./feeds.css"></style>
