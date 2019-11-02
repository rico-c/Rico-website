import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopBar from "./components/TopBar/topbar";

import "./App.less";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar></TopBar>
      </div>
    </Router>
  );
}

export default App;
