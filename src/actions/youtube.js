import axios from 'axios'
import { API_URL, YOUTUBE_API_URL, API_KEY } from './apiConfig'
import {
  CHANGE_QUERY,
  RESET_VIDEOS,
  MORE_VIDEOS_LOADED
} from './types'

export function changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    payload: { query: query }
  }
}

export function searchVideos(query) {
  const request = axios.get(`${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&q=${query}`)

  return (dispatch, getState) => {
    request.then(({data}) => {
      dispatch({type: RESET_VIDEOS, payload: data})
    })
  }
}
