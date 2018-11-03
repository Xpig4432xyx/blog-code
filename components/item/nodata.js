import React from 'react';
import s from './nodata.scss';

class Nodata extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className={s.container}>
        <span>暂无数据</span>
        <span>请观看别的栏目哦~</span>
        <span className={s.xin}>❤</span>
      </div>
    );
  }
}

export default Nodata;
