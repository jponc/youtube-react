import axios from 'axios'
import { YOUTUBE_API_URL, API_KEY } from './apiConfig'
import {
  CHANGE_QUERY,
  RESET_VIDEOS,
  SET_VIDEO
} from './types'

export function changeQuery(query) {
  return {
    type: CHANGE_QUERY,
    payload: { query: query }
  }
}

export function searchVideos(query) {
  const request = axios.get(`${YOUTUBE_API_URL}/search?key=${API_KEY}&part=snippet&q=${query}`)

  return dispatch => {
    request.then(({data}) => {
      dispatch({type: RESET_VIDEOS, payload: data})
    })
  }
}

export function setVideo(videoId) {
  const request = axios.get(`${YOUTUBE_API_URL}/videos?key=${API_KEY}&part=id,snippet,player&id=${videoId}`)

  return dispatch => {
    request.then(({data}) => {
      dispatch({type: SET_VIDEO, payload: data.items[0]})
    })
  }
}
