import React from "react";
import "./index.less";

export default class TopBar extends React.Component {
  state = {
    now: new Date()
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date()
      });
    }, 1000);
  }
  render() {
    return (
      <div className="top-bar">
        <span className="top-left">
          <img src={require("../../assets/ios-wifi.png")} />
        </span>
        <span className="top-center">
          {this.state.now.getHours()}:
          {this.state.now.getMinutes() < 10 ? "0" : ""}
          {this.state.now.getMinutes()}
        </span>
        <span className="top-right">
          <img src={require("../../assets/ios-battery-full.png")} />
        </span>
      </div>
    );
  }
}
