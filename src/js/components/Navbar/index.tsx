import React from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
import './index.scss'
import MsgService from '../../messageService'

const Tabs = [
  { key: '/requests', name: 'Requests', icon: 'mail' },
  { key: '/interceptors', name: 'Interceptors', icon: 'api' },
]

export function Navbar({ history, location }) {
  let tab = location.pathname
  if (tab === '/') {
    tab = Tabs[0].key
  }
  return (
    <nav className="ext-navbar level">
      <div className="level-item level-left">
        <div className="logo">PutMan Logo</div>
        <Menu
          onClick={param => {
            history.push(param.key)
          }}
          selectedKeys={[tab]}
          mode="horizontal"
        >
          {Tabs.map(t => (
            <Menu.Item key={t.key}>
              <Icon type={t.icon} />
              {t.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className="action level-item level-right">
        {tab === '/requests' && (
          <Button type="primary">
            <Icon type="caret-right" />
            Listen
          </Button>
        )}
        {tab === '/interceptors' && (
          <Button type="danger" onClick={() => MsgService.enableInterceptor()}>
            <Icon type="play-circle" />
            Intercept
          </Button>
        )}
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
