import React,{Component} from 'react';
import router from './router/router'
import RouterView from './components/RouterViews'
import 'antd/dist/antd.less';
import './App.css';
 class App extends Component {
  render(){
    return (
      <div className="App">
         <RouterView  router={router}/>
      </div>
    )
  }
}

export default App;
