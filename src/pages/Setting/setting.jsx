import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";
import { changeLanguage } from "./reducer";
import NavigateBar from "../../components/NavigateBar/navigateBar";

import "./index.less";

class Setting extends React.Component {
  render() {
    return (
      <div className="setting">
        <NavigateBar cnTitle="语言设置" enTitle="Language Setting"></NavigateBar>
        <div className="setting-main">
          <div
            className="setting-item"
            onClick={e => this.props.changeLanguage("zh", e)}
          >
            简体中文
            {this.props.lang === "zh" ? (
              <span>
                <Icon type="check" />
              </span>
            ) : null}
          </div>
          <div
            className="setting-item"
            onClick={e => this.props.changeLanguage("en", e)}
          >
            English
            {this.props.lang === "en" ? (
              <span>
                <Icon type="check" />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.settingReducer.lang
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