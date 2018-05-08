import React from 'react';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import MyLayout from '../components/Layout/';
import styles from '../components/Layout/Layout.less';

const { Content, Footer, Sider } = Layout;
const App = ({ children, app, location, }) => {
  const { darkTheme, isNavbar, siderFold,menu, navOpenKeys, } = app;

  const siderProps = {
    menu,
    location,
    siderFold,
    darkTheme,
    navOpenKeys,
    changeTheme() {

    },
    changeOpenKeys(openKeys) {

    }
  }

  return (
    <div>
      <Helmet>
        <title>ANTD ADMIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout className={darkTheme ? styles.dark : styles.light}>
        {
          !isNavbar &&
          <Sider
            trigger={null}
            collapsible
            collapsed={siderFold}
          >
            <MyLayout.Sider siderFold={siderFold}/>
          </Sider>
        }
        <Layout>

          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>

    </div>
  )
}

export default withRouter(connect(({ app }) => ({ app }))(App));

