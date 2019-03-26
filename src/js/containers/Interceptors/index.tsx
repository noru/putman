import React from 'react'
import './index.scss'
import InterceptorList from './components/InterceptorList'
import RequestDetails from '../Requests/components/RequestDetails'
import DetailStub from '#/components/DetailStub'
import { _requests } from '../Requests'

const _req = _requests[0]

export default function Interceptors() {
  return (
    <div className="tab-interceptors columns">
      <InterceptorList requests={_requests} />
      {_req ? <RequestDetails request={_req} /> : <DetailStub />}
    </div>
  )
}
