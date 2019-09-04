import React, { Component } from 'react'
import { Layout, Breadcrumb, Icon } from 'antd';
import RouterView from '../../components/RouterViews/'
import HeaderBar from './headerBar/headerBar'
import SlieMenu  from './SlieMenu/SlieMenu'
import {withRouter,Redirect} from 'dva/router'
import  settingTitle from '../../components/settingTitle/'
const {  Content, Sider } = Layout;

@withRouter
@settingTitle
 class Baselayout extends Component {
    render() {
      
        return (
           <div>
             <Layout>
                  <HeaderBar />
                <Layout>
                 <SlieMenu /> 
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                    Content
                    <RouterView  router={this.props.child}>
                        <Redirect from="*" to="404" />
                    </RouterView>
                    </Content>
                </Layout>
                </Layout>
            </Layout>,
           </div>
        )
    }
}
export default Baselayout