import React from 'react';
import s from './post.scss';
import classNames from 'classnames/bind';
import utils from 'utils';
import {Link} from 'react-router-dom';


let cx = classNames.bind(s);


class Post extends React.Component {
  constructor() {
    super();
    // this.getUrl = this.getUrl.bind(this);
  }

  // getUrl(node) {
  //   let frag = document.createElement('div');
  //   frag.innerHTML = node;
  //   // console.log(node);
  //   let result = [].map.call(frag.querySelectorAll('img'), function(img) {
  //     return img.src;
  //   });
  //   return result[0];
  // }

  render() {

    const {list} = this.props;

    return (
      <Link className={s.container} to={`/code/${list.number}`}>
        <div className={s.title}>{list.title}</div>
        <div className={s.time}>
          <i className={cx('iconfont', 'icon-shijian')}></i>
          <span>{new Date(list.updatedAt).format('yyyy-MM-dd')}</span>
        </div>
        <p className={s.postContent}>{utils.autoAddEllipsis(list.bodyText, 240)}</p>
        <span className={s.moreBtn}>阅读全文</span>
        <span className={s.line}></span>
      </Link>
    );
  }
}

export default Post;
