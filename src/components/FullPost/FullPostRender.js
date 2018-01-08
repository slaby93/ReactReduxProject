import React from "react";
import FullPost from "./FullPost";
import Loader from "./../Loader";

class FullPostRender extends React.PureComponent {
  render() {
    const { userId, title, body, isRequesting } = this.props;
    return isRequesting ? (
      <Loader />
    ) : (
      <FullPost userId={userId} title={title} body={body} />
    );
  }
}
export default FullPostRender;
