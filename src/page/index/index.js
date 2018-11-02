import React from 'react';
import s from './index.scss';
import Title from 'components/title/Title';
import Post from 'components/item/post';


class IndexPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={s.container}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default IndexPage;
