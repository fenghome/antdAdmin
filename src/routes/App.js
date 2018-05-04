import React from 'react';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet'

const { Content, Footer, Sider } = Layout;
const App = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>ANTD ADMIN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Layout>
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

export default App;

