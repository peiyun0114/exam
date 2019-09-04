import React, { Component } from 'react'
import RouterViews from '../../components/RouterViews'
 class Main extends Component {
    render() {
        return (
            <div>
              <RouterViews router={this.props.child}/>
            </div>
        )
    }
}

export default Main