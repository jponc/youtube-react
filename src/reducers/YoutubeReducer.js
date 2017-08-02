import {
  RESET_VIDEOS,
  MORE_VIDEOS_LOADED,
  CHANGE_QUERY
} from '../actions/types'

const INITIAL_STATE = {
  query: '',
  currentQuery: '',
  isLoaded: false,
  video: null,
  videos: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CHANGE_QUERY:
      return { ...state, query: action.payload.query }
    case RESET_VIDEOS:
      return {
        ...state,
        currentQuery: state.query,
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
