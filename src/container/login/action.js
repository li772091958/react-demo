export const REQUEST_DATA = 'REQUEST_DATA'
export const SUCCESS_DATA = 'SUCCESS_DATA'
export const FAIL_DATA = 'FAIL_DATA'

export function requestData() {
	return {
		type: REQUEST_DATA
	}
}
export function successData(data) {
	return {
		type: SUCCESS_DATA,
		data
	}
}
export function failData(err) {
	return {
		type: FAIL_DATA,
		err
	}
}