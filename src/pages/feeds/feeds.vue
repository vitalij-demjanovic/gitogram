<template>
  <topLine>
    <template #navBar>
      <div class="nav-bar">
        <div class="logo">
          <router-link to="/">
            <icon name="logo"></icon>
          </router-link>
        </div>
        <div class="login-nav">
          <button class="home">
            <router-link to="/">
              <icon name="home"></icon>
            </router-link>
          </button>
          <div class="log-photo">
            <button class="log-user-icon">
              <router-link to="profile">
                <userLogin></userLogin>
              </router-link>
            </button>
          </div>
          <button class="log-out" @click="logout">
            <icon name="logOut"></icon>
          </button>
        </div>
      </div>
    </template>
    <template #stories>
      <ul class="stories-item">
        <li class="story" v-for="item in trendings" :key="item.id">
          <userStory
            :avatar="item.owner.avatar_url"
            :user-name="item.name"
            :id="item.id"
            @click="storyPress(item.id)"
          >
          </userStory>
        </li>
      </ul>
    </template>
  </topLine>
  <div class="about">
    <router-view name="default"></router-view>
    <router-view name="extra"></router-view>
  </div>
</template>

<script>
import topLine from '../../components/topline/topline'
import icon from '../../icons/icon'
import userStory from '@/components/userStory/userStory'
import userLogin from '@/components/userLogin/userLogin'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topLine,
    icon,
    userStory,
    userLogin
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      user: state => state.user.user
    })
  },
  methods: {
    ...mapActions({
      fetchTrending: 'trendings/fetchTrending',
      logout: 'user/logout'
    }),
    storyPress (id) {
      this.$router.push({ name: 'gallery', params: { initialSlide: id } })
    }
  },
  async created () {
    await this.fetchTrending()
  }
}
</script>

<style lang="css" src="./feeds.css"></style>
