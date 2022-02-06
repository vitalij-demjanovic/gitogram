<template>
  <div class="authorization">
    <div class="c-container">
      <div class="authorization-title">
        <icon name="logo"></icon>
      </div>
      <div class="authorization-text">
        <span class="authorization-text_span">More than just one repository. <br>This is our digital world</span>
      </div>
      <div class="authorization-login" @click="authorize">
        <span class="login-span">Authorize with github</span>
        <icon name="git"></icon>
      </div>
      <div class="aut-img">
        <img src="../../../public/image/DeviceMacbooPro.png" alt="MacBoc" class="aut-img_item">
      </div>
      <div class="authorization-span">
        <span class="authorization-span_text">© Gitogram from Loftschool</span>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon'
import { clientId, clientSecret } from '@/pages/auth/exconsts'

export default {
  name: 'aut',
  components: {
    icon
  },
  methods: {
    authorize () {
      const gitHubUrl = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', clientId)
      params.append('scope', 'repo:status public_repo read:user')
      window.location.href = `${gitHubUrl}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
    } try {
      const response = await fetch(' https://webdev-api.loftschool.com/github', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientId, code, clientSecret
        })
      })
      const { token } = await response.json()
      localStorage.setItem('token', token)
      this.$router.replace({ name: 'About' })
      console.log(token)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="css" src="./auth.css"></style>
