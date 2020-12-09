import { Menu } from 'antd'
import React from 'react'
import './App.less'
import { FullCarousel } from './components'
import { InfoOutlined } from '@ant-design/icons'

function App() {
  return (
    <div className='App'>
      <FullCarousel />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          background: 'white',
          alignItems: 'center',
        }}>
        <p>Logo</p>
        <Menu mode='horizontal'>
          <Menu.Item key='menu' icon={<InfoOutlined />}>
            Menu
          </Menu.Item>
          <Menu.Item key='reservation' icon={<InfoOutlined />}>
            Reservation
          </Menu.Item>
          <Menu.Item key='aboutus' icon={<InfoOutlined />}>
            About Us
          </Menu.Item>
        </Menu>
        <p>+8801xxxxxxxx</p>
      </div>
    </div>
  )
}

export default App
