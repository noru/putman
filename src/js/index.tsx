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
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      rootElement,
    )
  })
}
