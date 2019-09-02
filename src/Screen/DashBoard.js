import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import PageContainer from "../Component/PageContainer";
import DashCard from "../Component/DashCard";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBar />
        <PageContainer />
        <DashCard />
        {/* <LoginPage /> */}
      </div>
    );
  }
}
