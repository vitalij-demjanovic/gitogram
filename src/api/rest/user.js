import { makeRequest } from '@/api/requests'

export const getUserData = () => makeRequest({
  method: 'GET',
  url: '/user'
})

export const getUserLaiks = () => makeRequest({
  method: 'Get',
  url: '/user/starred'
})

export const starRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'put'
})

export const unStarRepo = ({ repo, owner }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'delete'
})
