import { makeRequest } from '@/api/requests'

export const getUserData = () => makeRequest({
  url: '/user'
})

export const getUseRepos = () => makeRequest({
  url: '/user/repos'
})
