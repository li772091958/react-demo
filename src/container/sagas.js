import home from './home/sagas'
import about from './about/sagas'
import login from './login/sagas'

export default [
	...home,
	...about,
	...login
];