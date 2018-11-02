import React from 'react';
import s from './post.scss';
import classNames from 'classnames/bind';


let cx = classNames.bind(s);


class Post extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className={s.container}>
        <div className={s.title}>这是标题</div>
        <div className={s.time}>
          <i className={cx('iconfont', 'icon-shijian')}></i>
          <span>2018-1-2</span>
        </div>
        <p className={s.postContent}>最近有人问我博客的代码块是怎么做的，如下面的代码块，然后好久没有写文章了，趁着周末有时间就水一篇吧~</p>
        <img src="http://qiniu.goudanxi.com/layout_top.png" alt="" className={s.img}/>
        <span className={s.line}></span>
      </div>
    );
  }
}

export default Post;
