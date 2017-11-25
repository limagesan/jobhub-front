import React, { Component } from "react";
import { Button, Popup, Grid, Segment, Search} from "semantic-ui-react";
import "./Header.css";
import noticeImg from "../assets/notice.png";
import humanImg from "../assets/human2.png";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>JobHub</h1>

        <Grid>

              <Search className="search"
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                {...this.props}
              />

        </Grid>
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
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Segment>a</Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>a</Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>a</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
