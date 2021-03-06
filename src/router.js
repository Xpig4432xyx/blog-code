import React from 'react';
import {
  Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';
import '../public/css/reset.scss';
import '../public/css/global.scss';
import {Drawer} from 'antd-mobile';
import s from './router.scss';
import history from 'histories';

import Index from './page/index/index';
import DrawerList from 'components/DrawerList/DrawerList';
import CodePage from './page/code/index';
import Loading from 'components/item/loading';
import Content from './page/code/content';
import LifePage from './page/life/index';
import AboutPage from './page/about/index';


class RouterIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      activeType: ''
    };
    this.onOpenChange = this.onOpenChange.bind(this);
  }

  onOpenChange() {
    this.setState({open: !this.state.open});
  }

  render() {

    const sidebar = (
      <DrawerList onOpenClick={this.onOpenChange} activeType={history.location.pathname}></DrawerList>
    );

    return (
      <Provider store={store}>
        <Router history={history}>
          <div className={s.container}>
            <Drawer
              style={{minHeight: document.documentElement.clientHeight}}
              sidebar={sidebar}
              open={this.state.open}
              onOpenChange={this.onOpenChange}
            >
              <div className={s.drawerBtn} onClick={this.onOpenChange}></div>
              <div className={s.toptext}>GouDanXi的Blog</div>
              <div className={s.topbg}></div>
            </Drawer>
            <div className={s.layout}>
              <Switch>
                <Route exact path="/" render={() => {
                  return <Redirect to="/index"/>;
                }}/>
                <Route exact path="/index" component={Index}/>
                <Route exact path="/code" component={CodePage}/>
                <Route exact path="/code/:id?" component={Content}/>
                <Route exact path="/life" component={LifePage}/>
                <Route exact path="/me" component={AboutPage}/>
              </Switch>
              <Loading/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default RouterIndex;
