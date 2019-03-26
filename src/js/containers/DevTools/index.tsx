import React from 'react'
import { Route } from 'react-router'
import Navbar from '../../components/Navbar'
import Requests from '../Requests'
import Interceptors from '../Interceptors'
import './index.scss'

export default class DevTools extends React.Component {
  render() {
    return (
      <div className="dev-tools">
        <Navbar />
        <Route exact path="/" component={Requests} />
        <Route path="/requests" component={Requests} />
        <Route path="/interceptors" component={Interceptors} />
      </div>
    )
  }
}
