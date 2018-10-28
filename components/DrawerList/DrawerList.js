import React from 'react';
import s from './DrawerList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';


let cx = classNames.bind(s);

class DrawerList extends React.Component {
  constructor() {
    super();
    this._renderDrawerList = this._renderDrawerList.bind(this);
  }

  _renderDrawerList() {

    const {activeType} = this.props;

    const list = [
      {name: '首页', path: '/index', iconfont: 'icon-ziyuan'},
      {name: '技术分享', path: '/code', iconfont: 'icon-code'},
      {name: '生活见闻', path: '/life', iconfont: 'icon-shenghuo'},
      {name: '关于我', path: '/me', iconfont: 'icon-guanyuwomen'}
    ];

    return list.map((item, index) => {
      return (
        <Link className={s.list} to={item.path} key={index} onClick={() => this.props.onOpenClick()}>
          <div className={cx('listBox', {active: activeType === item.path})}>
            <i className={cx('iconfont', item.iconfont)}></i>
            <span className={s.listName}>{item.name}</span>
          </div>
        </Link>
      );
    });
  }

  render() {


    return (
      <div className={s.container}>
        <div className={s.avatar}></div>
        <div className={s.drawerBtn}></div>
        <div className={s.listBody}>
          {this._renderDrawerList()}
        </div>
      </div>
    );
  }
}

export default DrawerList;
