export default {
  getIssues(data) {
    return (dispatch) => {
      return this.http('github', 'post', '/graphql', data)
        .then((res) => {
          return res;
        });
    };
  }
};
