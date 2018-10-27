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
import {Drawer} from 'antd-mobile';
import s from './router.scss';

import Index from './page/index/index';


class RouterIndex extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={s.container}>

            <Switch>
              <Route exact path="/" component={Index}/>
              <Redirect from="/" to="/"/>
            </Switch>
          </div>

        </Router>
      </Provider>
    );
  }
}

export default RouterIndex;
