import React from 'react'
import {render} from 'react-dom'
import App from './container/app'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import configureStore from './container/store'
const store = configureStore()

const renderIndex = Component => {
  render(
  	<AppContainer>
      <Provider store={store}>
		    <App/>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderIndex(App);

if (module.hot) {
  module.hot.accept('./container/app', () => {
    try {
      renderIndex(App)
    } catch (e) {
      location.reload()
    }
  });
}