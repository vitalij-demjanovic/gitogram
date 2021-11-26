<template>
  <div class="c-container">
    <div class="posts">
      <div class="post" v-for="item in starred" :key="item.id">
        <postUser :avatar="item.owner.avatar_url" :user-name="item.owner.login"></postUser>
        <postContent>
          <template #postContent>
            <div class="post-content">
              <h1 class="post-content_title">{{ item.language }}</h1>
              <p class="post-content_text">{{ item.description }}</p>
              <rating>
                <template #rating>
                  <div class="rating">
                    <div class="rating-like" @click="item.stargazers_count += 1">
                      <icon name="star"></icon>
                      <p class="rating-like_paragraph">Star</p>
                    </div>
                    <span class="rating-counter_like">{{ item.stargazers_count }}</span>
                    <div class="rating-loop" @click="item.forks += 1">
                      <icon name="loop"></icon>
                      <p class="rating-like_paragraph">Fork</p>
                    </div>
                    <span class="rating-counter_loop">{{ item.forks }}</span>
                  </div>
                </template>
              </rating>
            </div>
          </template>
        </postContent>
        <userComment></userComment>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon'
import postUser from '@/components/about/aboutComp/postUser/postUser'
import postContent from '@/components/about/aboutComp/postContent/postContent'
import rating from '@/components/about/aboutComp/rating/rating'
import userComment from '@/components/about/aboutComp/userComment/userComment'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'about',
  components: {
    postUser,
    postContent,
    rating,
    userComment,
    icon
  },
  methods: {
    ...mapActions({
      fetchStarred: 'userStarred/fetchStarred'
    })
  },
  computed: {
    ...mapState({
      starred: state => state.userStarred.starred
    })
  },
  async created () {
    await this.fetchStarred()
  }
}
</script>

<style lang="css" src="./about.css" scoped>
</style>
