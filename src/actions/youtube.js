import axios from 'axios'
import { API_URL, YOUTUBE_API_URL, API_KEY } from './apiConfig'
import {
  RESET_VIDEOS,
  MORE_VIDEOS_LOADED
} from './types'

export function searchVideos(query) {
  debugger
  const request = axios.get(`${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&q=${query}`)

  return dispatch => {
    request.then(({data}) => {
      dispatch({type: RESET_VIDEOS, payload: data})
    })
  }
}
