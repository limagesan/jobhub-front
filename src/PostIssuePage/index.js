import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import "./PostIssuePage.css";

class PostIssuePage extends Component {
  render() {
    return (
      <div className="PostIssuePage">
        <h1>依頼内容入力</h1>
        <div className="main-contents">
          <Segment>
            <Form>
              <Form.Group widths="equal">
                <Form.Input label="レポジトリURL" placeholder="レポジトリURL" />
                <Form.Input label="イシューURL" placeholder="イシューURL" />
              </Form.Group>
              <Form.Input label="タイトル" placeholder="タイトル" />
              <Form.TextArea label="説明" placeholder="イシューの説明を入力してください" />
              <Form.Input label="報酬額" type="number" placeholder="1000" />

              <Form.Button>依頼</Form.Button>
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}

export default PostIssuePage;
