import React from 'react';
import s from './index.scss';

class CodePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={s.container}>
        这是code
      </div>
    );
  }
}

export default CodePage;
