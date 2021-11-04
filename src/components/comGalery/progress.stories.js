import progressBar from './progressBar'

export default {
  title: 'progressBar',
  component: { progressBar }
}

export const template = () => ({
  components: { progressBar },
  template: `<progressBar></progressBar>`
})

export const Default = template.bind({})

