import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar/topbar";
import HomePage from "./pages/Home/home";
import { isMobile } from "./utils/infoJudge";
import routeInfo from "./data/routeInfo";

import "./App.less";

class App extends React.Component {
  mobileDevice() {
    return isMobile();
  }
  render() {
    return (
      <div className={this.mobileDevice() ? "mobileApp" : "pcApp"}>
        <div className="device-container">
          <TopBar></TopBar>
          <div className="main-container">
            <Router>
              <Switch>
                <Route path="/" exact component={HomePage} />
                {Object.entries(routeInfo).map(([routeKey, routeValue]) => (
                  <Route
                    key={routeKey}
                    path={routeKey}
                    component={routeValue.component}
                  />
                ))}
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
