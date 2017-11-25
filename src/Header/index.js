import React, { Component } from "react";
import {
  Button,
  Popup,
  Grid,
  Segment,
  Divider,
  Input
} from "semantic-ui-react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1
          onClick={() => {
            this.props.onClick("/");
          }}
        >
          JobHub
        </h1>
        <a href="https://github.com/login/oauth/authorize?client_id=0dc6379899bfb7eda0b0">
          ユーザー登録
        </a>
        <Input icon="search" placeholder="Search..." />
        <Button
          onClick={() => {
            this.props.onClick("/issue/new");
          }}
        >
          Post Issue
        </Button>
        <Popup trigger={<Button>Notice</Button>}>
          あなたのPull Requestが受理されました
          <Divider section />
          あなたのPull Requestが棄却されました
          <Divider section />
          あなたのPull Requestが受理されました
        </Popup>
        <Button
          onClick={() => {
            this.props.onClick("/mypage");
          }}
        >
          Mypage
        </Button>
      </header>
    );
  }
}

export default Header;
