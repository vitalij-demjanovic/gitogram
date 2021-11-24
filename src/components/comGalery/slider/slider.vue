<template>
  <div class="slider-wrapper">
    <div class="slider" ref="slider">
      <ul  v-for="(item, ndx) in trendings"
           :key="item.id">
        <li ref="item"
        >
          <div class="arrow-prev" v-if="ndx > 0" @click="moveSlider(ndx - 1)" :class="[{'active': ndx === slideNdx}]">
            <icon name="back"></icon>
          </div>
          <stor
            :avatar="item.owner.avatar_url"
            :name="item.owner.login"
            :class="[{'active': ndx === slideNdx}]"
            :active="slideNdx === ndx"
            :content="item.readme"
          >
          </stor>
            <div class="arrows-next" v-if="ndx < 9" @click="moveSlider(ndx + 1)" :class="[{'active': ndx === slideNdx}]">
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
  components: {
    icon,
    stor
  },
  computed: {
    ...mapState({
      trendings: state => state.data
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
      fetchTrending: 'fetchTrending',
      fetchReadme: 'fetchReadme'
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
    async loadReadme () {
      await this.fetchReadmeActiveSlide()
    },
    async handleSlider (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async created () {
    await this.fetchTrending()
    await this.loadReadme()
  }
}
</script>

<style scoped lang="css" src="./slider.css"></style>
