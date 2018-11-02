import React from 'react';
import s from './loading.scss';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';


let cx = classNames.bind(s);


class Loading extends React.Component {
  constructor() {
    super();
  }

  render() {

    const {isLoading} = this.props;

    return (
      <div className={s.loader} style={{display: isLoading ? 'block' : 'none'}}>
        <div className={cx('loader-inner', 'ball-beat')}>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading
  };
};

export default connect(mapStateToProps)(Loading);
