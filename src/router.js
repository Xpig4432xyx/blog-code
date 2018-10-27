import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';
import '../public/css/reset.scss';

import Index from './page/index/index';

const router = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Redirect from="/" to="/"/>
      </Switch>
    </Router>
  </Provider>
);

export default router;
