import React, { Component } from "react";
import { Label, Table } from "semantic-ui-react";
class IssuesList extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Issue</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>タイトル</Table.HeaderCell>
              <Table.HeaderCell>報酬</Table.HeaderCell>
              <Table.HeaderCell>ユーザー</Table.HeaderCell>
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
      </div>
    );
  }
}

export default IssuesList;
