import React from 'react';
import s from './content.scss';
import Title from 'components/title/Title';
import 'github-markdown-css';
import {connect} from 'react-redux';
import Actions from 'actions';


class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      issue: {}
    };
    this.getIssue = this.getIssue.bind(this);
  }

  componentDidMount() {
    const {match: {params}} = this.props;
    this.getIssue(params.id);
  }

  getIssue(id) {
    const {dispatch} = this.props;
    let data = {
      query: `query {
        repository(owner:"Xpig4432xyx", name: "blog") {
          issue(number: ${id}) {
            title
            updatedAt
            bodyHTML
          }
        }
      }`
    };
    dispatch(Actions.getIssues(data))
      .then(res => {
        this.setState({
          issue: res.data.repository.issue
        });
      });
  }

  render() {

    const {issue} = this.state;

    return (
      <div className={s.container}>
        <Title title={issue.title}/>
        <div className="markdown-body" dangerouslySetInnerHTML={{__html: issue.bodyHTML}}></div>
      </div>
    );
  }
}

export default connect()(Content);
