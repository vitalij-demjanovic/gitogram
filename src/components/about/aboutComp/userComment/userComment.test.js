import { mount } from '@vue/test-utils'
import userComment from '@/components/about/aboutComp/userComment/userComment'

describe('issues comment', () => {
  it('ok load comment', async () => {
    const wrapper = mount(userComment)
    await wrapper.find('.comments-toogle button').trigger('click')
    expect(wrapper.emitted().loadContent.length).toBe(1)
  })
  it ('create elements', async () => {
    const issues = {
      title: 'test-title',
      user: {
        login: 'test-name'
      }
    }
    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({ length: 6 }).map(x => issues)
      }
    })
    await wrapper.find('.comments-toogle button').trigger('click')
    expect(wrapper.findAll('.comments-content').length).toBe(6)
  })
})
