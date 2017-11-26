import React, { Component } from "react";
import App from "./App";
import Api from "./Api";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      logined: false
    };
    this.api = new Api();
    console.log("initicalize", this.api);
  }

  dispatch(data) {
    this.setState(data);
  }

  render() {
    return (
      <div className="container">
        <App
          state={this.state}
          setState={this.dispatch.bind(this)}
          api={this.api}
        />
      </div>
    );
  }
}

export default Store;
