import React from 'react';
import PropTypes from 'prop-types'
import {Router, Switch, Route, Redirect, routerRedux} from 'dva/router';
import {LocaleProvider} from 'antd'
import dynamic from 'dva/dynamic';

import enUS from 'antd/lib/locale-provider/en_US';

import App from './routes/App';

const {ConnectedRouter} = routerRedux;

const Routers = ({history, app}) => {
  const error = dynamic({
    app,
    component:()=>import('./routes/error'),
  });

  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/dashboard/'),
    },
    {
      path: '/user',
      models: () => [import('./models/user')],
      component: () => import('./routes/user/'),
    },
    {
      path: '/user/:id',
      models: () => [import('./models/user/detail')],
      component: () => import('./routes/user/detail/'),
    },
    {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/login/'),
    },
    {
      path: '/request',
      component: () => import('./routes/request/'),
    },
    {
      path: '/UIElement/iconfont',
      component: () => import('./routes/UIElement/iconfont/'),
    },
    {
      path: '/UIElement/search',
      component: () => import('./routes/UIElement/search/'),
    },
    {
      path: '/UIElement/dropOption',
      component: () => import('./routes/UIElement/dropOption/'),
    },
    {
      path: '/UIElement/layer',
      component: () => import('./routes/UIElement/layer/'),
    },
    {
      path: '/UIElement/dataTable',
      component: () => import('./routes/UIElement/dataTable/'),
    },
    {
      path: '/UIElement/editor',
      component: () => import('./routes/UIElement/editor/'),
    },
    {
      path: '/chart/ECharts',
      component: () => import('./routes/chart/ECharts/'),
    },
    {
      path: '/chart/highCharts',
      component: () => import('./routes/chart/highCharts/'),
    },
    {
      path: '/chart/Recharts',
      component: () => import('./routes/chart/Recharts/'),
    },
    {
      path: '/post',
      models: () => [import('./models/post')],
      component: () => import('./routes/post/'),
    },
    {
      path:'/test',
      component:()=>import('./routes/test'),
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={enUS}>
        <App>
          <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/dashboard" />)}/>
            {
              routes.map(({path,...dynamics},index)=>(
                <Route exact path={path} component={dynamic({
                  app,
                  ...dynamics
                })} />
              ))
            }
            <Route component={error} />
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history:PropTypes.object,
  app:PropTypes.object,
}

export default Routers;
