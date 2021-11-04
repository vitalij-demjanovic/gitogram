import galleryBtn from './galleryBtn'

export default {
  title: 'galleryBtn',
  component: { galleryBtn }
}

export const template = () => ({
  components: {xbutton:  galleryBtn },
  template: `
    <xbutton hover-text="Unfollow">Following</xbutton>
  `
})

export const Default = template.bind({})


