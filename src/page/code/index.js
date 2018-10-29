import React from 'react';
import s from './index.scss';
import Title from 'components/title/Title';

class CodePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={s.container}>
        <Title title={'技术分享'}/>
      </div>
    );
  }
}

export default CodePage;
