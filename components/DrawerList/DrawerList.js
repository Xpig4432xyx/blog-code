import React from 'react';
import s from './DrawerList.scss';
import classNames from 'classnames/bind';
import history from 'histories';

let cx = classNames.bind(s);

class DrawerList extends React.Component {
  constructor() {
    super();
    this._renderDrawerList = this._renderDrawerList.bind(this);
    this.goPage = this.goPage.bind(this);
  }

  goPage(path) {
    const {onOpenClick} = this.props;
    onOpenClick();
    history.push(`${path}`);
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
        <div className={s.list} key={index} onClick={() => this.goPage(item.path)}>
          <div className={cx('listBox', {active: activeType === item.path})}>
            <i className={cx('iconfont', item.iconfont)}></i>
            <span className={s.listName}>{item.name}</span>
          </div>
        </div>
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
