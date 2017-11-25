import React, { Component } from "react";
import { Table, Divider, Segment, Button, Grid, List } from "semantic-ui-react";
import "./IssueDetailPage.css";

const IssueMock = {
  issue: {
    title: "Ruby help!",
    price: 1000,
    detail: "Rubyについてです。助けてください",
    repository_url: "https://github.com/takahashi/jobhub",
    issue_url: "https://github.com/takahashi/jobhub/issues/1"
  },
  challenges: [
    {
      status: "challenging",
      issue_id: 2,
      detail: "頑張りました",
      pull_request_url: "https://github.com/takahashi/test-repo/pull/2"
    }
  ]
};

class IssueDetailPage extends Component {
  constructor(props) {
    super();
    this.state = {
      issueId: props.match.params.id,
      challenged: false,
      completed: false,
      issueData: IssueMock
    };
  }

  challenge() {
    this.setState({ challenged: true });
  }

  complete() {
    this.setState({ completed: true });
  }

  componentWillMount() {}
  render() {
    return (
      <div className="IssueDetailPage">
        <div className="title">
          <h1>{this.state.issueData.issue.title}</h1>
        </div>
        <div className="main-contents">
          <div className="head-contents" />
          <Grid>
            <Grid.Column width={4}>
              <Segment>
                クライアント情報
                <div className="img-container">
                  <img src="https://avatars1.githubusercontent.com/u/16573379?s=460&v=4" />
                </div>
                {"limagesan"}
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              <Segment>
                <h2>依頼案件</h2>
                <p>詳細</p>
                {this.state.issueData.issue.detail}
                <List>
                  <List.Item>
                    Repository URL:{" "}
                    <a href={this.state.issueData.issue.repository_url}>
                      {this.state.issueData.issue.repository_url}
                    </a>
                  </List.Item>
                  <List.Item>
                    Issue URL:{" "}
                    <a href={this.state.issueData.issue.issue_url}>
                      {this.state.issueData.issue.issue_url}
                    </a>
                  </List.Item>
                  <List.Item>
                    Price: {this.state.issueData.issue.price}
                  </List.Item>
                </List>
                <Button color="yellow" onClick={this.challenge.bind(this)}>
                  挑戦
                </Button>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default IssueDetailPage;
