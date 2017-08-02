import {
  RESET_VIDEOS,
  MORE_VIDEOS_LOADED,
} from '../actions/types'

const INITIAL_STATE = {
  query: 'Michael Jordan',
  isLoaded: false,
  video: null,
  videos: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RESET_VIDEOS:
      return {
        ...state,
        videos: action.payload.items,
        isLoaded: true
      }
    case MORE_VIDEOS_LOADED:
      return {
        ...state,
        videos: (state.videos.concat(action.payload.items))
      }
    default:
      return state
  }
}
