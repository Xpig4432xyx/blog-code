import React from 'react';
import s from './index.scss';

class IndexPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={s.container}>
        这是首页
      </div>
    );
  }
}

export default IndexPage;
