import React from "react";
import { Link } from "react-router-dom";

class PostList extends React.Component {
  render() {
    const { post: { body, id, title, userId } } = this.props;
    return (
      <li className="PostListContainer_PostList">
        <Link to={`/fullPost/${id}`}>
          <div className="PostListContainer_PostList_userId">
            userId: {userId}
          </div>
          <div className="PostListContainer_PostList_topic">
            <span className="PostListContainer_PostList_topic_label">
              topic:
            </span>
            {title}
          </div>
        </Link>
      </li>
    );
  }
}

export default PostList;
