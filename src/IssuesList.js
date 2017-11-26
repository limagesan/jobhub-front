import React, { Component } from "react";
import { Table, Divider, Label } from "semantic-ui-react";
import "./IssuesList.css";

const IssuesList = ({ onClick, issues }) => {
  const rows = issues.map(issue => (
    <Table.Row key={issue.id}>
      <Table.Cell>
        <div className="img-container">
          <img src="https://avatars1.githubusercontent.com/u/16573379?s=460&v=4" />
        </div>
        {issue.user.name}
      </Table.Cell>
      <Table.Cell>
        <div className="cell-title">
          <h5>タイトル</h5>
        </div>
        <div className="cell-body">
          <a href={`/issues/${issue.id}`}>{issue.title}</a>
        </div>
      </Table.Cell>
      <Table.Cell>
        <p>報酬額</p>
        <Divider />
        {issue.cost}円
      </Table.Cell>
    </Table.Row>
  ));
  return (
    <div className="IssuesList">
      <Table celled>
        <Table.Body>{rows}</Table.Body>
      </Table>
    </div>
  );
};

export default IssuesList;
