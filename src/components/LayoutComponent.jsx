import React from 'react';

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import menus from '../config/menu';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class LayoutComponent extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div style={{width: '100%',height: 64, lineHeight: "50px", textAlign: 'center',backgroundColor: 'pink'}}/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              一级菜单1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              一级菜单2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="一级菜单3">
              <Menu.Item key="3">二级菜单1</Menu.Item>
              <Menu.Item key="4">二级菜单2</Menu.Item>
              <Menu.Item key="5">二级菜单3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="一级菜单4">
              <Menu.Item key="6">二级菜单1</Menu.Item>
              <Menu.Item key="8">二级菜单2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff' }}>xxxxx有限公司</Footer>
        </Layout>
      </Layout>
    );
  }
}