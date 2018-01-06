import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import RaisedButton from "material-ui/RaisedButton";
import backArrowIcon from "./../../resources/icons/back-arrow.png";

class FullPost extends React.Component {
  render() {
    const { userId, title, body } = this.props;
    return (
      <div className="FullPost">
        <Link to="/">
          <img className="FullPost_icon" src={`/${backArrowIcon}`} />
        </Link>
        <div className="FullPost_title">{title}</div>
        <div className="FullPost_body">{body}</div>
      </div>
    );
  }
}

export default FullPost;
