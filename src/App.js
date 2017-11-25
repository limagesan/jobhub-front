import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import PostIssuePage from "./PostIssuePage";
import IssueDetailPage from "./IssueDetailPage";
import Header from "./Header";

import "./App.css";

const Routes = withRouter(({ state, setState, history, api, location }) => {
  const handleClick = url => history.push(url);

  return (
    <div>
      <Header onClick={handleClick} />
      <Switch>
        <Route
          path="/mypage"
          render={props => (
            <MyPage {...props} state={state} setState={setState} api={api} />
          )}
        />
        <Route
          path="/issue/new"
          render={props => (
            <PostIssuePage
              {...props}
              state={state}
              setState={setState}
              api={api}
            />
          )}
        />
        <Route
          path="/issue/:id"
          render={props => (
            <IssueDetailPage
              {...props}
              state={state}
              setState={setState}
              api={api}
            />
          )}
        />
        <Route
          path="/"
          render={props => (
            <Home {...props} state={state} setState={setState} api={api} />
          )}
        />
      </Switch>
    </div>
  );
});

class App extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="App">
        <Routes
          state={this.props.state}
          setState={this.props.setState}
          api={this.props.api}
        />
      </div>
    );
  }
}

export default App;
