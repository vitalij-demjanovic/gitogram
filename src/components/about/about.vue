<template>
  <div class="c-container">
    <div class="posts">
      <div class="post" v-for="(item, index) in items" :key="item.id">
        <postUser :avatar="avatars[index]" :user-name="item.name"></postUser>
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
import dataUser from '../../data.json'
import posts from '../../posts.json'
import postUser from '@/components/about/aboutComp/postUser/postUser'
import postContent from '@/components/about/aboutComp/postContent/postContent'
import rating from '@/components/about/aboutComp/rating/rating'
import userComment from '@/components/about/aboutComp/userComment/userComment'
import * as api from '../../api'

import Andrew from '../../../public/image/Andrew.png'
import Camille from '../../../public/image/Camille.png'
import Caimlr from '../../../public/image/Camilr.png'
import Can from '../../../public/image/Can.png'
import Diself from '../../../public/image/Diself.png'
import Gartor from '../../../public/image/Gartor.png'
import Iloveanime from '../../../public/image/Iloveanime.png'
import josh from '../../../public/image/josh.png'
import Marselle from '../../../public/image/Marselle.png'
import Piter from '../../../public/image/Piter.png'

export default {
  name: 'about',
  components: {
    postUser,
    postContent,
    rating,
    userComment,
    icon
  },
  data () {
    return {
      posts,
      dataUser,
      items: [],
      avatars: [
        Andrew,
        Camille,
        Caimlr,
        Can,
        Diself,
        Gartor,
        Iloveanime,
        josh,
        Marselle,
        Piter
      ]
    }
  },
  props: {
    name: String,
    language: String,
    description: String,
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

<style lang="css" src="./about.css" scoped>
</style>
