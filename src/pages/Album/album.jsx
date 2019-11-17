import React from "react";
import NavigateBar from "../../components/NavigateBar/navigateBar";

import "./index.less";

class Album extends React.Component {

  render() {
    return (
      <div className="album-page">
        <NavigateBar cnTitle="相册" enTitle="Album"></NavigateBar>
        album
      </div>
    );
  }
}

export default Album;
