import React from 'react';
import s from './index.scss';
import Title from 'components/title/Title';
import Nodata from 'components/item/nodata';
import {connect} from 'react-redux';
import Actions from 'actions';
import Swiper from './swiper';

class CodePage extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
    this.getLabels = this.getLabels.bind(this);
    this.returnLabels = this.returnLabels.bind(this);
    this.getIssues = this.getIssues.bind(this);
    this._renderPost = this._renderPost.bind(this);
  }

  componentDidMount() {
    this.getLabels();
  }

  returnLabels(labels) {
    let newLabels = [];
    labels.splice(labels.findIndex(item => item.name === 'Life'), 1);
    labels.map((item, index) => {
      newLabels.push(item.name);
    });
    return newLabels;
  }

  getIssues(labels = null, cursor = null) {
    const {dispatch} = this.props;
    let data = {
      query: `query {
          repository(owner:"Xpig4432xyx", name: "blog") {
            issues(orderBy:{field: UPDATED_AT, direction: DESC} , labels: [${labels}], first: 10, after: ${cursor}) {
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
          }
        }`
    };
    dispatch(Actions.getIssues(data))
      .then(res => {
        this.setState({
          list: res.data.repository.issues.edges
        });
      });
  }

  getLabels() {
    const {dispatch} = this.props;
    let data = {
      query: `query {
          repository(owner:"Xpig4432xyx", name: "blog") {
            labels(first: 100){
              nodes{
                name
              }
            }
          }
        }`
    };
    dispatch(Actions.getLabels(data))
      .then(res => {
        this.getIssues(this.returnLabels(res.data.repository.labels.nodes));
      });
  }

  // render Post
  _renderPost() {
    const {list} = this.state;
    return list && list.map((item, index) => {
      return <Swiper
        key={item.cursor}
        list={item.node}
      />;
    });
  }

  render() {

    const {list} = this.state;

    return (
      <div className={s.container}>
        <Title title={'技术分享'}/>
        {!list.length > 0 && <Nodata/>}
        {this._renderPost()}
      </div>
    );
  }
}

export default connect()(CodePage);
