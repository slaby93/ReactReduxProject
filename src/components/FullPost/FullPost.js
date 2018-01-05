import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import RaisedButton from "material-ui/RaisedButton";

class FullPost extends React.Component {
  render() {
    const { userId, title, body } = this.props;
    return (
      <div className="FullPost">
        <div className="FullPost_userId">{userId}</div>
        <div className="FullPost_title">{title}</div>
        <div className="FullPost_body">{body}</div>
        <Link to="/">
          <button className="FullPost_button">back to main list</button>
        </Link>
      </div>
    );
  }
}

export default FullPost;
