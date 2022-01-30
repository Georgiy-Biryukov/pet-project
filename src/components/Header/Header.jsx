import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


const { Header } = Layout;

function HeaderComponent() {
    return (
        <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
          <Menu.Item key="1">
            <Link to="/usertable" key="1">Users</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/machinetable" key="1">Machines</Link>
          </Menu.Item>
        </Menu>
      </Header>
    )
}

export default HeaderComponent
