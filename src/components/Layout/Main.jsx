import React, { Fragment } from 'react'
import Sider from '../Sider'
import Header from '../Header'
import Content from '../Content'
import { Layout } from 'antd'

const Main = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Sider />
      <Content {...props}>
        {children}
      </Content>
    </Layout>
  )
}

export default Main;