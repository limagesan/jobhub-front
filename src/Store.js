import React, { Component } from "react";
import App from "./App";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      logined: false
    };
  }

  dispatch(data) {
    this.setState(data);
  }

  render() {
    return (
      <div>
        <App state={this.state} setState={this.dispatch.bind(this)} />
      </div>
    );
  }
}

export default Store;
