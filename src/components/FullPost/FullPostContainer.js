import React from "react";
import { connect } from "react-redux";
import FullPostRender from "./FullPostRender";
import * as DATA_REDUCER from "./../../reducers/reducers";

class FullPostContainer extends React.PureComponent {
  componentDidMount() {
    const { fetchData, match: { params: { id } } } = this.props;
    fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  render() {
    return <FullPostRender {...this.props} />;
  }
}
const mapStateToProps = state => {
  const { isRequesting, currentPost } = state;
  if (isRequesting || !currentPost) {
    return { isRequesting };
  }
  const { userId, title, body } = currentPost;
  return { userId, title, body, isRequesting };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => {
      dispatch({ type: DATA_REDUCER.FETCH_SINGLE_POST_DATA_START });
      fetch(url)
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: DATA_REDUCER.FETCH_SINGLE_POST_DATA_SUCESS,
            response
          });
        })
        .catch(error => {
          dispatch({
            type: DATA_REDUCER.FETCH_SINGLE_POST_DATA_FALIURE,
            error
          });
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPostContainer);
