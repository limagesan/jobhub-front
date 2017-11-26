import React, { Component } from "react";
import { Table, Grid, Segment } from "semantic-ui-react";

import "./MyPage.css";

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      challenges: [],
      issues: []
    };
  }
  componentWillMount() {
    this.props.api.getMypage().then(res => {
      console.log("res getMypage", res);
      const challenges = res.challenges;
      const issues = res.issues;
      this.setState({ challenges, issues });
    });
  }

  goIssueDetailPage(id) {
    this.props.history.push(`/issues${id}`);
  }

  render() {
    return (
      <div className="MyPage">
        <h1>MyPage</h1>
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
            <div className="main-contents">
              <h1>Challenges</h1>
              <ChallengesTable
                onClick={this.goIssueDetailPage.bind(this)}
                challenges={this.state.challenges}
              />
              <h1>Issues</h1>
              <IssuesTable
                onClick={this.goIssueDetailPage.bind(this)}
                issues={this.state.issues}
              />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const ChallengesTable = ({ challenges, onClick }) => {
  const rows = challenges.map(challenge => (
    <Table.Row
      key={challenge.issue.title}
      onClick={() => {
        onClick(challenge.issue.issue_id);
      }}
    >
      <Table.Cell>{challenge.issue.title}</Table.Cell>
      <Table.Cell>{challenge.issue.cost}</Table.Cell>
      <Table.Cell>{challenge.status}</Table.Cell>
    </Table.Row>
  ));
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>タイトル</Table.HeaderCell>
          <Table.HeaderCell>報酬</Table.HeaderCell>
          <Table.HeaderCell>ステータス</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows}
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const IssuesTable = ({ issues, onClick }) => {
  const rows = issues.map(issue => (
    <Table.Row
      key={issue.title}
      onClick={() => {
        onClick(issue.id);
      }}
    >
      <Table.Cell>{issue.title}</Table.Cell>
      <Table.Cell>{issue.cost}</Table.Cell>
      <Table.Cell>{issue.status}</Table.Cell>
    </Table.Row>
  ));
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>タイトル</Table.HeaderCell>
          <Table.HeaderCell>報酬</Table.HeaderCell>
          <Table.HeaderCell>ステータス</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {rows}
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default MyPage;
