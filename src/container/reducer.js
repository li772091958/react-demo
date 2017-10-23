import { combineReducers } from 'redux'

import homeReducer from './home/reducer'
import aboutReducer from './about/reducer'
import loginReducer from './login/reducer'

export default combineReducers({
	homeReducer,
	aboutReducer,
	loginReducer
})
