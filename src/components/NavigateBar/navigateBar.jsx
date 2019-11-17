import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.less";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="setting-top">
        <Link to="/" className="setting-back">
          {this.props.lang === "zh" ? "返回" : "back"}
        </Link>
        <span>
          {this.props.lang === "zh" ? this.props.cnTitle : this.props.enTitle}
        </span>
        <Link to="/" className="setting-done">
          {this.props.lang === "zh" ? "完成" : "done"}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.settingReducer.lang
  };
};

export default connect(mapStateToProps)(TopBar);
