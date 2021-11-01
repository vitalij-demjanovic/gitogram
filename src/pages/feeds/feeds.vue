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
              <icon name="logPhoto"></icon>
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
        <li class="story" v-for="story in stories" :key="story.id">
          <userStory :avatar="story.avatar" :user-name="story.userName"></userStory>
        </li>
      </ul>
    </template>
  </topLine>
  <about></about>
</template>

<script>
import topLine from '../../components/topline/topline'
import icon from '@/icons/icon'
import userStory from '@/components/userStory/userStory'
import about from '../../components/about/about'
import stories from '../../../public/data.json'

export default {
  name: 'feeds',
  components: {
    topLine,
    icon,
    userStory,
    about
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="css" src="./feeds.css"></style>
