import React from "react";

import "./index.less";

export default class Setting extends React.Component {
  render() {
    return (
      <div className="setting">
        <div className="setting-top">
          <span>iphone语言</span>
          <span>完成</span>
        </div>
        <div className="setting-main">
          <div>简体中文</div>
          <div>English</div>
        </div>
      </div>
    );
  }
}
