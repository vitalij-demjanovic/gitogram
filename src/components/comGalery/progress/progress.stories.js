import progressBar from './progressBar'

export default {
  title: 'progressBar',
  components: { progressBar }
}

export const template = () => ({
  components: { xProgress: progressBar },
  template: `<x-progress></x-progress>`
})

export const Default = template.bind({})

