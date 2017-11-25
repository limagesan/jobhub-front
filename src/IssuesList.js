import React, { Component } from "react";
import { Table } from "semantic-ui-react";
const IssuesList = ({ onClick, issues }) => {
  const rows = issues.map(issue => (
    <Table.Row onClick={() => onClick(issue.id)}>
      <Table.Cell>{issue.title}</Table.Cell>
      <Table.Cell>{issue.price}</Table.Cell>
      <Table.Cell>{issue.user.name}</Table.Cell>
    </Table.Row>
  ));
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

        <Table.Body>{rows}</Table.Body>
      </Table>
    </div>
  );
};

export default IssuesList;
