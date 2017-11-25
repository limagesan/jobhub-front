import React, { Component } from "react";
import { Table, Divider, Segment } from "semantic-ui-react";
import "./IssueDetailPage.css";

class IssueDetailPage extends Component {
  constructor(props) {
    super();
    this.state = {
      issueId: props.match.params.id
    };
  }

  componentWillMount() {}
  render() {
    return (
      <div className="IssueDetailPage">
        <h1>Title</h1>
        <div className="main-contents">
          <Segment>
            <h2>評価</h2>
            <Divider section />
            評価はありません
            {"issueId" + this.state.issueId}
          </Segment>
        </div>
      </div>
    );
  }
}

export default IssueDetailPage;
