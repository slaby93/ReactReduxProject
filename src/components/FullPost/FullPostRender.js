import React from "react";
import FullPost from "./FullPost";

class FullPostRender extends React.PureComponent {
  render() {
    const { userId, title, body, isRequesting } = this.props;
    return isRequesting ? (
      <span>...Loading</span>
    ) : (
      <FullPost userId={userId} title={title} body={body} />
    );
  }
}
export default FullPostRender;
