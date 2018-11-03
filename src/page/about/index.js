import React from 'react';
import s from './index.scss';
import Title from 'components/title/Title';
import Nodata from 'components/item/nodata';

class AboutPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={s.container}>
        <Title title={'关于我'}/>
        <Nodata/>
      </div>
    );
  }
}

export default AboutPage;
