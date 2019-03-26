import React from 'react'
import { List, Avatar, Input, Icon } from 'antd'
import cls from 'classname'
import './index.scss'
import LeftRight from '#/components/LeftRight'

function Actions() {
  return [
    <a className="edit-btn" onClick={() => console.info('edit')}>
      <Icon type="edit" />
    </a>,
  ]
}

interface Props {
  requests: any[]
}

function InterceptorList({ requests }: Props) {
  let selected = 0

  return (
    <div className="interceptor-list column is-two-fifths">
      <LeftRight className="actions" />
      <div className="filter">
        <Input
          prefix={<Icon type="filter" style={{ color: '#c9c9c9' }} />}
          placeholder="filter..."
          allowClear
          onChange={() => 1}
        />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={requests}
        renderItem={(item, i) => (
          <List.Item
            key={i}
            className={cls('request-item', selected === i && 'selected')}
            actions={Actions()}
            onClick={() => console.info('select')}
          >
            <List.Item.Meta
              avatar={<Avatar className={'avatar-' + item.method}>{item.method[0]}</Avatar>}
              title={<span>{item.host}</span>}
              description={
                <span>
                  <span>{item.path}</span>
                  <span>{item.search}</span>
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
export default InterceptorList
