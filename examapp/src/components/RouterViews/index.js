import React, { Component } from 'react'
import propTypes from 'prop-types'
import {Switch,Route} from 'dva/router'
 class RouterViews extends Component {
    static propTypes={
        router:propTypes.object
    }
    
    render() {
        const routers=this.props.router.routers ?  this.props.router.routers :this.props.router
        return (
            <Switch>
                {
                    routers.map((item)=>{
                        return <Route path={item.path} key={item.path} render={(...props)=>{
                            return <item.component {...props} child={item.children}/>
                        }}></Route>
                    })
                }
                {this.props.children}
          </Switch>
        )
    }
}
export default RouterViews 