import React from 'react';
import s from './DrawerList.scss';

class DrawerList extends React.Component {
  constructor() {
    super();
  }


  render() {

    const list = [
      {name: '数据统计', path: '/dataIndex'},
      {name: '排行榜', path: '/rank'},
      {name: '广告素材', path: '/pmMatter'},
      {name: '我的空间', path: '/zone'},
      {name: '账号设置', path: '/accountSetting'}
    ];

    return (
      <div className={s.container}>
        <div className={`list_body`}>
          {list && list.map((obj, index) => {
            return <div key={index}>
              你好
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default DrawerList;
