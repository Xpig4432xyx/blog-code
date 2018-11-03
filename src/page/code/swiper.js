import React from 'react';
import s from './swiper.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import classNames from 'classnames/bind';
import utils from 'utils';



let cx = classNames.bind(s);


class Swiper extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // const script = document.createElement('script');
    // script.src = 'http://qiniu.goudanxi.com/swiper.min.js';
    // const s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(script, s);
  }

  render() {

    const {list} = this.props;

    return (
      <Link className={s.container} to={`/code/${list.number}`}>
        <div className={s.title}>{list.title}</div>
        <div className={s.time}>
          <i className={cx('iconfont', 'icon-shijian')}></i>
          <span>{new Date(list.updatedAt).format('yyyy-MM-dd')}</span>
        </div>
        <p className={s.postContent}>{utils.autoAddEllipsis(list.bodyText, 88)}</p>
        <span className={s.moreBtn}>阅读全文</span>
        <span className={s.line}></span>
      </Link>
    );
  }
}

export default connect()(Swiper);
