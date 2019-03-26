import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import DevTools from './DevTools'

export class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="*" component={DevTools}/>
      </Router>
    )
  }
}

export default App