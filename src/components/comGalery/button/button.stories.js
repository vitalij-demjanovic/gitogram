import galleryBtn from './galleryBtn'

export default  {
  title: 'galleryBtn',
  component: { galleryBtn },
  data () {
    return {
      isActive: false
    }
  }
}

const template = () => ({
  components: {xButton:  galleryBtn},
  template: `
    <x-button @click="isActive = !isActive">{{ isActive ? 'Unfollow' : 'Follow' }}</x-button>
  `
})

export const Default = template.bind({})


