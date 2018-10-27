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
import DrawerList from 'components/DrawerList/DrawerList';


class RouterIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      activeType: ''
    };
  }

  render() {

    const sidebar = (
      <DrawerList></DrawerList>
    );

    return (
      <Provider store={store}>
        <Router>
          <div className={s.container}>
            <Drawer
              style={{minHeight: document.documentElement.clientHeight}}
              sidebar={sidebar}
              open={this.state.open}
            >
              <div>1</div>
            </Drawer>
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
