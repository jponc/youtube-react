import {combineReducers} from 'redux'
import youtubeReducer from './YoutubeReducer'
import { reducer as formReducer } from 'redux-form'

const allReducers = combineReducers({
  youtube: youtubeReducer,
  form: formReducer,
});

export default allReducers
