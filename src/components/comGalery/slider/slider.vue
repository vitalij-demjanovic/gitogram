<template>
  <div class="slider-wrapper">
    <div class="slider" ref="slider">
      <ul  v-for="(item, ndx) in trendings"
           :key="item.id">
        <li ref="item"
        >
          <div class="arrow-prev" v-if="ndx > 0" @click="handleSlider(ndx - 1)" :class="[{'active': ndx === slideNdx}]">
            <icon name="back"></icon>
          </div>
          <stor
            :status="item.following"
            :avatar="item.owner.avatar_url"
            :name="item.owner.login"
            :class="[{'active': ndx === slideNdx},]"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            :id-f="item.id"
            :content="item.readme"
            @onFollow="fetchFollow"
            @unFollow="fetchUnfollow"
          >
          </stor>
            <div class="arrows-next" v-if="ndx < 9" @click="handleSlider(ndx + 1)" :class="[{'active': ndx === slideNdx}]">
              <icon name="next"></icon>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import stor from '@/components/comGalery/sliderStor/stor'
import icon from '@/icons/icon'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'slider',
  props: {
    initialSlide: {
      type: Number
    }
  },
  components: {
    icon,
    stor
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0
    }
  },
  methods: {
    ...mapActions({
      fetchTrending: 'trendings/fetchTrending',
      fetchReadme: 'trendings/fetchReadme',
      fetchFollow: 'trendings/fetchFollow',
      fetchUnfollow: 'trendings/fetchUnfollow'
    }),
    async fetchReadmeActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const widSlide = parseInt(getComputedStyle(item).getPropertyValue('width'), 10)
      this.slideNdx = slideNdx
      this.sliderPosition = -(widSlide * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
      console.log(this.sliderPosition)
    },
    async  loadReadme () {
      this.loading = true
      await this.fetchReadmeActiveSlide()
    },
    async handleSlider (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      console.log('logo')
      await this.handleSlider(ndx)
    }
    await this.fetchTrending()
    await this.loadReadme()
  }
}
</script>

<style scoped lang="css" src="./slider.css"></style>
