import { combineReducers } from 'redux'

import homeReducer from './home/reducer'
import aboutReducer from './about/reducer'

export default combineReducers({
	homeReducer,
	aboutReducer
})
