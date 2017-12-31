import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class FullPost extends React.Component {
  render() {
    const { userId, title, body } = this.props;
    return (
      <div className="FullPost">
        <div className="FullPost_userId">{userId}</div>
        <div className="FullPost_title">{title}</div>
        <div className="FullPost_body">{body}</div>
        <button className="FullPost_Link">
          <Link to="/">back to list</Link>
        </button>
      </div>
    );
  }
}

export default FullPost;
