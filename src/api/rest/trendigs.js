import { makeRequest } from '../requests'

const addStartingZero = (value) => value < 10 ? `0${value}` : value

export const getTrending = (lang = 'javascript') => {
  const params = new URLSearchParams()
  const weekNS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weekNS)

  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}
