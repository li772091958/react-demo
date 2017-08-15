import { 
	REQUEST_DATA,
	SUCCESS_DATA,
	FAIL_DATA
} from './action'

const initialState = {
	fetching: false,
	data: [],
	err: null
}

function homeReducer(state = initialState, action){
	switch(action.type) {
		case REQUEST_DATA:
			return Object.assign({}, state, {
				fetching: true
			})
		case SUCCESS_DATA:
			return Object.assign({}, state, {
				fetching: false,
				data: action.data
			})
		case FAIL_DATA:
			return Object.assign({}, state, {
				fetching: false,
				err: action.err
			})
		default:
			return state
	}
}

export default homeReducer