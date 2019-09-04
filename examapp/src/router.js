import React from 'react';
import { Router, Switch } from 'dva/router';
import routers from './router/router'
import RouterViews from './components/RouterViews'
console.log(routers)
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
         <RouterViews router={routers}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;