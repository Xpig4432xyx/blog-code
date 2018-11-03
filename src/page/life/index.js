import React from 'react';
import s from './index.scss';
import Title from 'components/title/Title';
import Nodata from 'components/item/nodata';

class LifePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={s.container}>
        <Title title={'生活见闻'}/>
        <Nodata/>
      </div>
    );
  }
}

export default LifePage;
