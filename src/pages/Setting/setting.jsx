import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import { changeLanguage } from "./reducer";

import "./index.less";

class Setting extends React.Component {
  render() {
    return (
      <div className="setting">
        <div className="setting-top">
          <Link to="/" className="setting-back">
            返回
          </Link>
          <span>设置语言</span>
          <Link to="/" className="setting-done">
            完成
          </Link>
        </div>
        <div className="setting-main">
          <div
            className="setting-item"
            onClick={e => this.props.changeLanguage("zh", e)}
          >
            简体中文
            <span>
              <Icon type="check" />
            </span>
          </div>
          <div
            className="setting-item"
            onClick={e => this.props.changeLanguage("en", e)}
          >
            English
            <span>
              <Icon type="check" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.lang
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeLanguage: lang => {
      dispatch(changeLanguage(lang));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);