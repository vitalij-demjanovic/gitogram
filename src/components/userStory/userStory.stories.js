import userStory from './userStory'

export default {
  title: 'userStory',
  component: {
    userStory
  }
}

const template = () => ({
  props: {
    userName: {
      type: String,
      required: true
    }
  },
  components: { avatar: userStory },
  template: `
    <avatar
      avatar="https://picsum.photos/200/300"
      alt="avatar">
    </avatar>
  `
})

export const Default = template.bind({})
