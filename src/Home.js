import React, { Component } from "react";
import IssuesList from "./IssuesList";
import "./Home.css";

const issuesMock = [
  {
    id: 1,
    title: "Controllerのここの書き方がわかりません",
    price: 1000,
    user: {
      id: 1,
      name: "Hiroki"
    }
  },
  {
    id: 2,
    title: "Controllerのここの書き方がわかりません",
    price: 1000,
    user: {
      id: 2,
      name: "Hiroki"
    }
  },
  {
    id: 3,
    title: "Controllerのここの書き方がわかりません",
    price: 1000,
    user: {
      id: 3,
      name: "Hiroki"
    }
  }
];

class Home extends Component {
  constructor() {
    super();
    this.state = {
      issues: issuesMock
    };
  }

  componentWillMount() {}

  goIssueDetailPage(id) {
    this.props.history.push(`/issue/${id}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>ようこそJobHubへ</h1>
        <div className="main-contents">
          <IssuesList
            onClick={this.goIssueDetailPage.bind(this)}
            issues={this.state.issues}
          />
        </div>
      </div>
    );
  }
}

export default Home;
