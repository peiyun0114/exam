import React, { Component } from 'react'
import { Layout, Menu,  Icon } from 'antd';
import {withRouter} from 'dva/router'
import  {menuRoutes} from '../../../router/router'
const { SubMenu } = Menu;
const {  Sider } = Layout;

@withRouter

 class SlieMenu extends Component {
    handleClick = ({key})=>{
       const {history}=this.props
         history.push({
           pathname:key
       })
    }
     renderSubMenu(route,isIcon=true)
     {  
         
            if(route.children)
            {
             return ( <SubMenu
                key={route.path}
                title={ <span><Icon type="user" />{route.meta.title}</span>}
              >
                {
                    route.children.map((item)=>{
                        return this.renderSubMenu(item,false)
                    })
                }
            </SubMenu>)
            }
            else{
                return (  <Menu.Item key={route.path}>
                      <span>{ isIcon &&  <Icon type="user" />}{route.meta.title}</span>
                    </Menu.Item>)
            }
     }
    render() {
        return (
            <div>
                   <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    onClick={this.handleClick}
                    >
                            {
                                menuRoutes.map((item)=>{
                                        return  this.renderSubMenu(item)
                            })
                            }
                   
                    </Menu>
                </Sider>
            </div>
        )
    }
}
export default SlieMenu