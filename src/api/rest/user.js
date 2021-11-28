import { makeRequest } from '@/api/requests'

export const getUserData = () => makeRequest({
  method: 'GET',
  url: '/user'
})

export const getUserLaiks = () => makeRequest({
  method: 'GET',
  url: '/user/starred'
})

export const getIssues = ({ owner, repo }) => makeRequest({
  method: 'GET',
  url: `/repos/${owner}/${repo}/issues`
})

export const starRepo = ({ owner, repo }) => makeRequest({
  method: 'PUT',
  url: `/user/starred/${owner}/${repo}`
})

export const unStarRepo = ({ owner, repo }) => makeRequest({
  method: 'DELETE',
  url: `/user/starred/${owner}/${repo}`
})
