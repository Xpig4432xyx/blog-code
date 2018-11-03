import React from 'react';
import s from './index.scss';
import Title from 'components/title/Title';
import Post from 'components/item/post';
import {connect} from 'react-redux';
import Actions from 'actions';


class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.getIssues = this.getIssues.bind(this);
    this._renderPost = this._renderPost.bind(this);
  }

  componentDidMount() {
    this.getIssues();
  }

  getIssues(cursor = null) {
    const {dispatch} = this.props;
    let data = {
      query: `query {
          repository(owner:"Xpig4432xyx", name: "blog") {
            issues(orderBy:{field: UPDATED_AT, direction: DESC} , labels: null, first: 10, after: ${cursor}) {
              edges{
                cursor
                node{
                  title
                  updatedAt
                  bodyText
                  number
                }
              }
            }
            labels(first: 100){
              nodes{
                name
              }
            }
          }
        }`
    };
    dispatch(Actions.getIssues(data))
      .then(res => {
        // console.log(res);
        // let list = res.data.repository.issues.edges;
        // cursor = list[(list.length - 1)].cursor;
        this.setState({
          list: res.data.repository.issues.edges
        });
      });
  }

  // render Post
  _renderPost() {
    const {list} = this.state;
    return list && list.map((item, index) => {
      return <Post
        key={item.cursor}
        list={item.node}
      />;
    });
  }

  render() {
    return (
      <div className={s.container}>
        {this._renderPost()}
      </div>
    );
  }
}

export default connect()(IndexPage);
