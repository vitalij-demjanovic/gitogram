import galleryBtn from './galleryBtn'

export default  {
  title: 'galleryBtn',
  component: { galleryBtn },
}

const template = () => ({
  components: {xButton:  galleryBtn},
  template: `
    <x-button hover-text="Unfollow"></x-button>
  `
})

export const Default = template.bind({})


