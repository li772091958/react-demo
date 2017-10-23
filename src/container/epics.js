import { combineEpics } from 'redux-observable';
import home from './home/epics'

const rootEpics = combineEpics(
	home
)

export default rootEpics