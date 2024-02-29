'use client'
import React from 'react'
import {
  CaretUpFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  CaretLeftFilled,
  CaretRightFilled,
  AccountBookFilled,
  BellFilled,
  ProjectFilled,
  IdcardFilled,
  SignalFilled,
  SearchOutlined,
  VideoCameraOutlined,
  RightOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Input, Badge, Avatar, theme, Card } from 'antd';
const { Header } = Layout;
const Navbar = () => {
  return (
    <>
      <Header className='flex flex-row items-center justify-between w-full '
        style={{ padding: 32, position: 'sticky', top: 0, right: 0, zIndex: 10 }}>

        <div className='w-11'></div>
        {/* <Button theme="light" className='w-1/3' icon={<SearchOutlined />}>Search</Button> */}
        <Input className='w-1/3' placeholder="search" suffix={<SearchOutlined />} />
        <div className="right-menu-wrapper">
          <div className="flex flex-row items-center justify-between gap-9">
            <QuestionCircleOutlined size={56} className='w-5' style={{ color: "#fff" }} />
            <Badge count={1} style={{ fontSize: '12px', width: '20px', height: '20px', lineHeight: '20px' }}>
              <BellOutlined size={64} style={{ color: "#fff" }} />
            </Badge>
            <Avatar size={56} icon={<UserOutlined />} />
          </div>
        </div>
      </Header></>
  )
}

export default Navbar