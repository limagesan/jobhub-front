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
import noticeImg from "../assets/notice.png";
import humanImg from "../assets/human2.png";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>JobHub</h1>
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
        <Button className="submit"
          onClick={() => {
            this.props.onClick("/issue/new");
          }}
        >
          依頼する
        </Button>

        <img src={noticeImg} />
        <img src={humanImg} />
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
