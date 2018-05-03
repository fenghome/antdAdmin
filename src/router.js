import React from 'react';
import { Router, Switch, Route, Redirect, routerRedux } from 'dva/router';
import { LocaleProvider } from 'antd'
import dynamic from 'dva/dynamic';
import enUS from 'antd/lib/locale-provider/en_US'

import App from './routes/App';

const { ConnectedRouter } = routerRedux;

const Routers = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={enUS}>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </App>
      </LocaleProvider>

    </ConnectedRouter>
  )
}

const Home = ()=>(
  <h3>Home</h3>
);

const About = ()=>(
  <h3>About</h3>
);


export default Routers;
