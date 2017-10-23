export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAIL_LOGIN = 'FAIL_LOGIN'
export const CLEAR_ERR = 'CLEAR_ERR'

export function requestLogin(values) {
	return {
		type: REQUEST_LOGIN,
		values
	}
}
export function successLogin(data) {
	return {
		type: SUCCESS_LOGIN,
		data
	}
}
export function failLogin(err) {
	return {
		type: FAIL_LOGIN,
		err
	}
}
export function clearErr() {
	return {
		type: CLEAR_ERR
	}
}