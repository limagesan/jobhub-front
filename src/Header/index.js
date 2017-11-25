import React, { Component } from "react";
import { Button, Popup, Grid, Segment } from "semantic-ui-react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>JobHub</h1>
        <Button
          onClick={() => {
            this.props.onClick("/issue/new");
          }}
        >
          Post Issue
        </Button>
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
