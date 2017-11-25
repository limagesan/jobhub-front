import React, { Component } from "react";
import { Table, Grid, Segment } from "semantic-ui-react";

import "./MyPage.css";

class MyPage extends Component {
  render() {
    return (
      <div className="Home">
        <h1>MyPage</h1>
        <Segment>Challenges</Segment>
        <ChallengesTable />
        <Segment>Isuses</Segment>

        <IssuesTable />
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
