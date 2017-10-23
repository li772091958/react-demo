import { 
	REQUEST_LOGIN,
	SUCCESS_LOGIN,
	FAIL_LOGIN,
	CLEAR_ERR
} from './action'

let userData = localStorage.getItem('userData');
let data = JSON.parse(userData)
let loggedIn = !!userData

const initialState = {
	fetching: false,
	values: {},
	data,
	err: null,
	loggedIn
}

function loginReducer(state = initialState, action){
	switch(action.type) {
		case REQUEST_LOGIN:
			return Object.assign({}, state, {
				fetching: true,
				values: action.values
			})
		case SUCCESS_LOGIN:
			return Object.assign({}, state, {
				fetching: false,
				data: action.data,
				loggedIn: true
			})
		case FAIL_LOGIN:
			return Object.assign({}, state, {
				fetching: false,
				err: action.err
			})
		case CLEAR_ERR:
			return Object.assign({}, state, {
				err: null
			})
		default:
			return state
	}
}

export default loginReducer