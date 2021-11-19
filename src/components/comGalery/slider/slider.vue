<template>
  <div class="slider-wrapper">
    <div class="slider" ref="slider">
      <ul>
        <li
          v-for="(item, ndx) in items"
          :key="item.id" ref="item"
        >
          <div class="arrow-prev" v-if="ndx > 0" @click="moveSlider(ndx - 1)" :class="[{'active': ndx === slideNdx}]">
            <icon name="back"></icon>
          </div>
          <stor
            :avatar="item.owner.avatar_url"
            :name="item.name"
            :class="[{'active': ndx === slideNdx}]"
            :active="slideNdx === ndx"
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
import * as api from '@/api'

export default {
  name: 'slider',
  components: {
    icon,
    stor
  },
  props: {
    active: Boolean,
    owner: String,
    avatar_url: String,
    name: String,
    readme: String
  },
  data () {
    return {
      items: [],
      slideNdx: 0,
      sliderPosition: 0
    }
  },
  methods: {
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const widSlide = parseInt(getComputedStyle(item).getPropertyValue('width'), 10)
      this.slideNdx = slideNdx
      this.sliderPosition = -(widSlide * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
      console.log(this.sliderPosition)
    }
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

<style scoped lang="css" src="./slider.css">

</style>
