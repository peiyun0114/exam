import dva from 'dva'
import './App.css'
import 'antd/dist/antd.less';
const  app=dva()

app.router(require('./router').default);

app.start('#root');
