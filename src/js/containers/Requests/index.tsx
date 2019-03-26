import React from 'react'
import DetailStub from '#/components/DetailStub'
import { HttpMethod, RequestLike } from '#/types'
import RequestList from './components/RequestList'
import RequestDetails from './components/RequestDetails'
import './index.scss'

export const _requests: RequestLike[] = [
  {
    method: HttpMethod.GET,
    host: 'www.google.com',
    path: '/path/to/resources',
    search: '?a=123&b=456',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer HKJJG*BLJGJG!^_!@*#&' },
    payload: `
      {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "module": "commonjs",
        "noEmitOnError": true,
        "noImplicitAny": false,
        "outDir": "../Scripts/",
        "removeComments": false,
        "sourceMap": true,
        "target": "es5",
        "moduleResolution": "node",
        "lib": [
          "es2015",
          "dom"
        ]
      }
    `,
    response: {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
      data: `
      {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "module": "commonjs",
        "noEmitOnError": true,
        "noImplicitAny": false,
        "outDir": "../Scripts/",
        "removeComments": false,
        "sourceMap": true,
        "target": "es5",
        "moduleResolution": "node",
        "lib": [
          "es2015",
          "dom"
        ]
      }
    `,
    },
  },
  {
    method: HttpMethod.POST,
    host: 'www.google.com',
    path: '/path/to/resources',
    search: '?a=123&b=456',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer HKJJG*BLJGJG!^_!@*#&' },
  },
]

const _req = _requests[0]

export default function Requests() {
  return (
    <div className="tab-requests columns">
      <RequestList requests={_requests} />
      {_req ? <RequestDetails request={_req} /> : <DetailStub />}
    </div>
  )
}
