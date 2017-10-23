import React from 'react'
import {render} from 'react-dom'
import App from './container/app'
import 'rxjs'

import { AppContainer } from 'react-hot-loader'

const renderIndex = Component => {
  render(
  	<AppContainer>
		<App/>
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