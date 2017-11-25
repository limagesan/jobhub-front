import React, { Component } from "react";
import { Table, Divider, Segment, Button } from "semantic-ui-react";
import "./IssueDetailPage.css";

class IssueDetailPage extends Component {
  constructor(props) {
    super();
    this.state = {
      issueId: props.match.params.id,
      challenged: false,
      completed: false
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
        <h1>Title</h1>
        <div className="main-contents">
          <Segment>
            <h2>評価</h2>
            <Divider section />
            評価はありません
            {"issueId" + this.state.issueId}
            <Button onClick={this.challenge.bind(this)}>挑戦</Button>
            <Button onClick={this.complete.bind(this)}>完了</Button>
          </Segment>
        </div>
      </div>
    );
  }
}

export default IssueDetailPage;
