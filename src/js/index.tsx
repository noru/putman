import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/App'

import '../css/main'

const rootElement = document.getElementById('app')

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElement,
)

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const orgError = console.error // eslint-disable-line no-console
  console.error = message => {
    // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>') === -1) {
      // Log the error as normally
      orgError.apply(console, [message])
    }
  }

  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootElement,
    )
  })
}
