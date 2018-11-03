export default {
  getIssues(data) {
    return (dispatch) => {
      dispatch(this.showloading());
      return this.http('github', 'post', '/graphql', data)
        .then((res) => {
          dispatch(this.hideloading());
          return res;
        });
    };
  },

  getLabels(data) {
    return (dispatch) => {
      return this.http('github', 'post', '/graphql', data)
        .then((res) => {
          return res;
        });
    };
  },


  showloading() {
    return {
      type: this.types.common.SHOWLOADING,
      isLoading: true
    };
  },

  hideloading() {
    return {
      type: this.types.common.HIDELOADING,
      isLoading: false
    };
  }
};
