import React, { useEffect, useRef } from 'react'
import { Avatar, PageHeader, Tag, Collapse, Tabs } from 'antd'
import Headers from '#/components/Headers'
import './index.scss'
import { RequestLike } from '#/types'

interface Props {
  request: RequestLike
}

export function RequestDetails({ request }: Props) {
  let response = request.response
  let respBody = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    let textarea = respBody.current!
    let { top } = textarea.getBoundingClientRect()
    textarea.style.height = `${window.innerHeight - top - 50}px`
  })

  return (
    <div className="request-detail column">
      <PageHeader
        title={
          <span>
            <Avatar size="small" className={'avatar-' + request.method}>
              {request.method}
            </Avatar>
            {request.path}
          </span>
        }
        subTitle={request.search}
        extra={
          response && (
            <Tag key={response.status} color="red">
              {response.status}
            </Tag>
          )
        }
      >
        <div className="box request-info">
          <Collapse bordered={false} defaultActiveKey={['headers']}>
            <Collapse.Panel key="headers" header={<h1>Headers</h1>}>
              <Headers headers={request.headers} />
            </Collapse.Panel>
            {request.payload && (
              <Collapse.Panel key="payload" header={<h1>Payload</h1>} style={{ border: 0 }}>
                <textarea disabled className="textarea" rows={10} value={request.payload} />
              </Collapse.Panel>
            )}
          </Collapse>
        </div>
      </PageHeader>

      {response && (
        <Tabs className="response-info" defaultActiveKey="body" onChange={() => 1}>
          <Tabs.TabPane tab="Body" key="body">
            <textarea id="resp-textarea" ref={respBody} disabled className="textarea" value={request.payload} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Response Headers" key="headers">
            <Headers headers={response.headers} />
          </Tabs.TabPane>
        </Tabs>
      )}
    </div>
  )
}

export default RequestDetails
