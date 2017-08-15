import { ABOUT } from './action'

const initialState = {
	data: 'about'
}

function aboutReducer(state = initialState, action){
	switch(action.type) {
		case ABOUT:
			return Object.assign({}, state, {
				data: action.data
			})
		default:
			return state
	}
}

export default aboutReducer