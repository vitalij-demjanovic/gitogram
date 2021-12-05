<template>
  <div class="section-repository">
    <div class="section-repository_head">
      <h1 class="section-repository_title">Repositories</h1>
      <span class="section-repository_span">{{ repos.length }}</span>
    </div>
    <div class="user-repository" v-for="item in repos" :key="item.id">
      <h2 class="user-repository_title">{{ item.name }}</h2>
      <p class="user-repository_des">{{ item.description }}</p>
      <rating>
        <template #rating>
          <div class="rating">
            <div class="rating-like">
              <icon name="star"></icon>
              <p class="rating-like_paragraph">Star</p>
            </div>
            <span class="rating-counter_like">{{ item.stargazers_count }}</span>
            <div class="rating-loop">
              <icon name="loop"></icon>
              <p class="rating-like_paragraph">Fork</p>
            </div>
            <span class="rating-counter_loop">{{ item.forks }}</span>
          </div>
        </template>
      </rating>
    </div>
  </div>
</template>

<script>
import rating from '@/components/about/aboutComp/rating/rating'
import icon from '@/icons/icon'
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

export default {
  name: 'repos',
  components: {
    rating,
    icon
  },
  setup () {
    const { dispatch, state } = useStore()
    onMounted(() => {
      dispatch('user/fetchUserRepo')
    })
    return {
      repos: computed(() => state.user.repos)
    }
  }
}
</script>

<style scoped lang="css" src="./reposs.css"></style>
