import React, { Component } from "react";
import IssuesList from "./IssuesList";
import "./Home.css";
// import soccerImg from "./assets/soccer.jpg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>ようこそJobHubへ</h1>

        <div className="main-contents">
          <IssuesList />
        </div>
      </div>
    );
  }
}

export default Home;
