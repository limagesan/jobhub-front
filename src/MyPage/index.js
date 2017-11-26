import React, { Component } from "react";
import { Table, Grid, Segment, Icon } from "semantic-ui-react";

import "./MyPage.css";

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      challenges: [],
      issues: [],
      earnSum: 0
    };
  }
  componentWillMount() {
    this.props.api.getMypage().then(res => {
      console.log("res getMypage", res);
      const challenges = res.data.challenges || [];
      const issues = res.data.issues || [];

      let earnSum = 0;
      for (let i = 0; i < challenges.length; i++) {
        if (challenges[i].status === "accepted") {
          earnSum += challenges[i].cost;
        }
      }
      this.setState({ challenges, issues, earnSum });
    });
  }

  goIssueDetailPage(id) {
    this.props.history.push(`/issues/${id}`);
  }

  render() {
    return (
      <div className="MyPage">
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
              <h3 className="title">現在の報酬額</h3>
              {this.state.earnSum} 円
            </Segment>
            <div className="main-contents">
              <h3 className="title">チャレンジしたIssue</h3>
              <ChallengesTable
                onClick={this.goIssueDetailPage.bind(this)}
                challenges={this.state.challenges}
              />
              <h3 className="title">投稿したIssue</h3>
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
        onClick(challenge.issue.id);
      }}
    >
      <Table.Cell>{challenge.issue.title}</Table.Cell>
      <Table.Cell>{challenge.issue.cost}</Table.Cell>
      <Table.Cell>
        {challenge.status === "accepted" ? (
          <div className="accepted">
            {challenge.status} <Icon name="thumbs outline up" />
          </div>
        ) : (
          <div>
            {challenge.status} <Icon name="wait" />
          </div>
        )}
      </Table.Cell>
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
        {rows.length ? rows : <h5>チャレンジしたIssueはありません</h5>}
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

      <Table.Body>{rows.length ? rows : <h5>投稿したIssueはありません</h5>}</Table.Body>
    </Table>
  );
};

export default MyPage;
