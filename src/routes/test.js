import React from 'react';

import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import styles from './style.css';

const { Header, Sider, Content, Footer } = Layout;
const { MenuItem, SubMenu } = Menu;

class Test extends React.Component {
  render() {
    return (
      <Layout>

        <Layout>
          <Sider
            width={200}
            style={{ background: '#fff' }}
            collapsible
            trigger={null}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}

              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
                <Menu.Item key="1"><span>option1</span></Menu.Item>
                <Menu.Item key="2"><span>option2</span></Menu.Item>
                <Menu.Item key="3"><span>option3</span></Menu.Item>
                <Menu.Item key="4"><span>option4</span></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" /><span>subnav 2</span></span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" /><span>subnav 3</span></span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Content style={{ padding: '0 50px' }}>
            <Header>
              <div className={styles.logo} />

            </Header>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 280, background: '#fff' }} >Content</div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default Test;
