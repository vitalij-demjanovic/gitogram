<template>
  <div class="c-container">
    <div class="posts">
      <div class="post" v-for="post in posts" :key="post.id">
        <postUser :avatar="post.avatar" :user-name="post.userName"></postUser>
        <postContent>
          <template #postContent>
            <div class="post-content">
              <h1 class="post-content_title">{{ post.title }}</h1>
              <p class="post-content_text">
                <b>{{ post.firstWord }}</b>
                {{ post.content }}</p>
              <rating></rating>
            </div>
          </template>
        </postContent>
        <userComment></userComment>
      </div>
    </div>
  </div>
</template>

<script>
import dataUser from '../../../public/data.json'
import posts from '../../../public/posts.json'
import postUser from '@/components/about/aboutComp/postUser'
import postContent from '@/components/about/aboutComp/postContent'
import rating from '@/components/about/aboutComp/rating'
import userComment from '@/components/about/aboutComp/userComment'

export default {
  name: 'about',
  components: {
    postUser,
    postContent,
    rating,
    userComment
  },
  data () {
    return {
      posts,
      dataUser
    }
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    firstWord: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" src="./about.css" scoped>

</style>
