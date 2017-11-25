import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import "./IssuesList.css";

const IssuesList = ({ onClick, issues }) => {
  const rows = issues.map(issue => (
    <Table.Row onClick={() => onClick(issue.id)} key={issue.id}>
      <Table.Cell>
        <div className="img-container">
          <img src="https://avatars1.githubusercontent.com/u/16573379?s=460&v=4" />
        </div>
        {issue.user.name}
      </Table.Cell>
      <Table.Cell>{issue.title}</Table.Cell>
      <Table.Cell>{issue.price}</Table.Cell>
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
