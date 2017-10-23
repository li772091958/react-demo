import { createStore, applyMiddleware,compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';

const sagaMiddleware = createSagaMiddleware()
const epicMiddleWare = createEpicMiddleware(rootEpics, {
	dependencies: { getJSON: ajax.getJSON }
})

import sagas from './sagas'
import rootEpics from './epics'

import reducers from './reducer'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const enhancer = composeEnhancers(
	//applyMiddleware(sagaMiddleware)
	applyMiddleware(epicMiddleWare)
);


//redux-saga
// export default function configureStore(initialState) {


// 	const store = createStore(reducers, initialState, enhancer)

// 	sagas.map(sagaMiddleware.run)

// 	if(module.hot) {
// 	    module.hot.accept('../container/reducer', () => {
// 	      const nextReducer = require('../container/reducer');
// 	      store.replaceReducer(nextReducer);
// 	    });
// 	}

// 	return store
// }


//redux-observable
export default function configureStore(initialState) {

	const store = createStore(reducers, initialState, enhancer)

	if(module.hot) {
	    module.hot.accept('../container/reducer', () => {
	      const nextReducer = require('../container/reducer');
	      store.replaceReducer(nextReducer);
	    });
	}

	return store
}