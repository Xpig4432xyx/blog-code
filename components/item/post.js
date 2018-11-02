import React from 'react';
import s from './post.scss';
import classNames from 'classnames/bind';
import utils from 'utils';


let cx = classNames.bind(s);


class Post extends React.Component {
  constructor() {
    super();
  }

  render() {

    const {list} = this.props;

    return (
      <div className={s.container}>
        <div className={s.title}>{list.title}</div>
        <div className={s.time}>
          <i className={cx('iconfont', 'icon-shijian')}></i>
          <span>{new Date(list.updatedAt).format('yyyy-MM-dd')}</span>
        </div>
        <p className={s.postContent}>{utils.autoAddEllipsis(list.bodyText, 90)}</p>
        <img src="http://qiniu.goudanxi.com/layout_top.png" alt="" className={s.img}/>
        <span className={s.line}></span>
      </div>
    );
  }
}

export default Post;
