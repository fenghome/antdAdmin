import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router'
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';
import { styles } from '../components/Layout';
import '../themes/index.less';
import './App.less';

const { Content, Footer, Sider } = Layout;
const App = ({ children, dispatch, app, loading, location }) => {
  const {
    darkTheme,
  } = app;
  let { pathname } = location;
  return (
    <div>
      <Helmet>
        <title>ANTD ADMIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout className={darkTheme ? styles.dark : styles.light}>
        <Sider>
          边框
        </Sider>
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

