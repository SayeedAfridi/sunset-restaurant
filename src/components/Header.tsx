import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Badge, Menu } from 'antd'
import React from 'react'
import logo from '../assets/icons/sunset.png'
import {
  ReservationIcon,
  EventIcon,
  MenuIcon,
  InfoIcon,
  SpecialIcon,
  HireUsIcon,
  CallIcon,
  UserIcon,
  ShoppingBagIcon,
} from './CustomIcons'

const Header = () => {
  const iconStyle: React.CSSProperties = {
    fontSize: '20px',
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: 'white',
        alignItems: 'center',
        paddingTop: 10,
        width: '100vw',
        overflow: 'hidden',
      }}>
      <img
        src={logo}
        alt='logo'
        style={{ padding: '0px 10px', height: '40px', marginTop: -10 }}
      />
      <Menu mode='horizontal'>
        <Menu.Item key='menu' icon={<MenuIcon style={iconStyle} />}>
          Menu
        </Menu.Item>
        <Menu.Item key='specials' icon={<SpecialIcon style={iconStyle} />}>
          Specials
        </Menu.Item>
        <Menu.Item
          key='reservation'
          icon={<ReservationIcon style={iconStyle} />}>
          Reservation
        </Menu.Item>
        <Menu.Item key='events' icon={<EventIcon style={iconStyle} />}>
          Events
        </Menu.Item>
        <Menu.Item key='hireus' icon={<HireUsIcon style={iconStyle} />}>
          Hire Us
        </Menu.Item>
        <Menu.Item key='aboutus' icon={<InfoIcon style={iconStyle} />}>
          About Us
        </Menu.Item>
      </Menu>
      <Menu selectable={false} mode='horizontal'>
        <Menu.Item
          icon={
            <Badge count={5}>
              <ShoppingBagIcon style={{ fontSize: '30px', padding: 0 }} />
            </Badge>
          }
        />
        <Menu.Item
          key='profile'
          icon={<UserIcon style={{ fontSize: '30px' }} />}
        />
      </Menu>
    </div>
  )
}

export default Header
