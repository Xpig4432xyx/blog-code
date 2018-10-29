import React from 'react';
import s from './Title.scss';

class Title extends React.Component {
  constructor() {
    super();
  }

  render() {

    const {title} = this.props;

    return (
      <div className={s.container}>
        <span className={s.title}>{title}</span>
      </div>
    );
  }
}

export default Title;
