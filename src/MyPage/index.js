import React, { Component } from "react";
import { Table, Grid, Segment } from "semantic-ui-react";

import "./MyPage.css";

class MyPage extends Component {
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
          <ChallengesTable />
          <h1>Issues</h1>
          <IssuesTable />
        </div>
        </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const ChallengesTable = () => {
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
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

const IssuesTable = () => {
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
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
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
