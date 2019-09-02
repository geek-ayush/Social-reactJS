import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import PageContainer from "../Component/PageContainer";
import LoginPage from "../Container/Login";

export default class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <PageContainer />
        {/* <LoginPage /> */}
      </div>
    );
  }
}
