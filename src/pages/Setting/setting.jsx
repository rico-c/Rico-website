import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import "./index.less";

export default class Setting extends React.Component {
  render() {
    return (
      <div className="setting">
        <div className="setting-top">
          <span>设置语言</span>
          <Link to="/" class="setting-done">
            完成
          </Link>
        </div>
        <div className="setting-main">
          <div className="setting-item">
            简体中文
            <span>
              <Icon type="check" />
            </span>
          </div>
          <div className="setting-item">
            English
            <span>
              <Icon type="check" />
            </span>
          </div>
        </div>
      </div>
    );
  }
  s;
}
