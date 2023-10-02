import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Header.css'; // 導入CSS樣式

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo-container">
        <img src="logo.png" alt="公司Logo" className="logo" />
        <span className="company-name">我的公司</span>
      </div>
      <Menu
  mode="horizontal"
  defaultSelectedKeys={['1']}
  style={{ lineHeight: '64px', backgroundColor: 'transparent' }} // 背景設定為透明
  overflowedIndicator={<MenuOutlined />}
  theme='dark'
>
  <Menu.Item key="1">導覽1</Menu.Item>
  <Menu.Item key="2">導覽2</Menu.Item>
  <Menu.Item key="3">導覽3</Menu.Item>
</Menu>

    </Header>
  );
}

export default AppHeader;
