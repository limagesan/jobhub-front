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
        <h1>JobHub</h1>
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
