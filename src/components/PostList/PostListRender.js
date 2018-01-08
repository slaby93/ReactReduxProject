import React from "react";
import PostList from "./PostList";
import Loader from "./../Loader";

class PostListRender extends React.PureComponent {
  constructor() {
    super();
    this.showPostListOnSite = this.showPostListOnSite.bind(this);
  }
  showPostListOnSite() {
    const { response } = this.props;
    return (
      response &&
      response.map(post => {
        return <PostList post={post} key={post.id} />;
      })
    );
  }

  render() {
    const showPostListOnSite = this.showPostListOnSite();
    const { response, isRequesting } = this.props;
    return isRequesting ? (
      <Loader />
    ) : (
      <ul className="PostListContainer">{showPostListOnSite}</ul>
    );
  }
}

export default PostListRender;
