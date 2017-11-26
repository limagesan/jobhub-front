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
    let accessToken = this.props.location.search;
    accessToken = accessToken.replace(/\?code=/g, "");

    console.log("location", this.props.location, accessToken);
    this.props.api.login(accessToken).then(res => {
      console.log("res login", res);
      localStorage.setItem("token", res.data.access_token);
      this.setState({ loading: false });
      this.props.history.push("/");
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
