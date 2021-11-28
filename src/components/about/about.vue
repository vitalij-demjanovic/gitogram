<template>
  <div class="c-container">
    <div class="posts">
      <div class="post" v-for="{ id, owner, language, description, stargazers_count, forks, name, issue } in issues" :key="id">
        <postUser :avatar="owner.avatar_url" :user-name="owner.login"></postUser>
        <postContent>
          <template #postContent>
            <div class="post-content">
              <h1 class="post-content_title">{{ language }}</h1>
              <p class="post-content_text">{{ description }}</p>
              <rating>
                <template #rating>
                  <div class="rating">
                    <div class="rating-like" @click="stargazers_count += 1">
                      <icon name="star"></icon>
                      <p class="rating-like_paragraph">Star</p>
                    </div>
                    <span class="rating-counter_like">{{ stargazers_count }}</span>
                    <div class="rating-loop" @click="forks += 1">
                      <icon name="loop"></icon>
                      <p class="rating-like_paragraph">Fork</p>
                    </div>
                    <span class="rating-counter_loop">{{ forks }}</span>
                  </div>
                </template>
              </rating>
            </div>
          </template>
        </postContent>
        <userComment
          :issues="issue"
          @loadContent="loadIssues({ owner: owner.login, repo: name })">
        </userComment>
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
  props: {
    comIN: Boolean
  },
  methods: {
    ...mapActions({
      fetchStarred: 'starred/fetchIssues',
      fetchIssues: 'starred/fetchIssues'
    }),
    loadIssues ({ owner, repo }) {
      this.fetchIssues({ owner, repo })
    }
  },
  computed: {
    ...mapState({
      starred: state => state.starred.data,
      issues: state => state.starred.data
    })
  },
  async created () {
    await this.fetchStarred()
  }
}
</script>

<style lang="css" src="./about.css" scoped>
</style>
