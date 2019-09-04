import React, { Component } from 'react'
import {getRoute} from '@/router/router'

const settingTitle=(WarpComponent)=>{
  
  return class extends Component {
      componentDidMount () {
        this.setTitle()
      }
      componentDidUpdate () {
          this.setTitle()
      }
      setTitle ()
      {
          const pathname=this.props.location.pathname
          const route=getRoute(pathname)
      
          if(route)
          {
             document.title=route.meta.title
          }
         else{
           return null
         }
            
      }
      render ()
      {
          return <WarpComponent {...this.props}/>
      }
  }
}
export default  settingTitle