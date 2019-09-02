import React from "react";
// import { LoginPage } from "../Pages";
import LoginPage from "../Container/Login";
import RegisterPage from "../Container/Register";
import Root from "../Screen/Root";
import DashBoard from "../Screen/DashBoard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppNavigator extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Root} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register/" exact component={RegisterPage} />
        <Route path="/dashboard/" exact component={DashBoard} />
      </Router>
    );
  }
}

export default AppNavigator;
