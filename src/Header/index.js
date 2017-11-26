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
        <h1
          onClick={() => {
            this.props.onClick("/");
          }}
        >
          JobHub
        </h1>
        <Input icon="search" placeholder="Search..." />
        <a
          className="register"
          href="https://github.com/login/oauth/authorize?client_id=0dc6379899bfb7eda0b0"
        >
          ユーザー登録
        </a>
        <Button
          className="submit"
          color="blue"
          onClick={() => {
            this.props.onClick("/issues/new");
          }}
        >
          依頼する
        </Button>

        <Popup
          trigger={
            <div className="noticeimage">
              <img src={noticeImg} />
            </div>
          }
        >
          あなたのPull Requestが受理されました
          <Divider section />
          あなたのPull Requestが棄却されました
          <Divider section />
          あなたのPull Requestが受理されました
        </Popup>
        <div
          className="humanimage"
          onClick={() => {
            this.props.onClick("/mypage");
          }}
        >
          <img src={humanImg} />
        </div>
      </header>
    );
  }
}

export default Header;
