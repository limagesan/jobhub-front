import React, { Component } from "react";
import { Loader } from "semantic-ui-react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.api.login().then(() => {
      this.setState({ loading: false });
      setTimeout(() => {
        this.props.history.push("/");
      }, 1000);
    });
  }

  render() {
    return (
      <div className="Login">
        <div className="main-contents">
          {this.state.loading ? "ログイン中です" : null}
          <Loader active={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default Login;
