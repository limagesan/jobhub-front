import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import PostIssuePage from "./PostIssuePage";
import IssueDetailPage from "./IssueDetailPage";
import Header from "./Header";

import "./App.css";

const Routes = withRouter(({ state, setState, history }) => {
  const handleClick = url => history.push(url);

  return (
    <div>
      <Header onClick={handleClick} />
      <Switch>
        <Route path="/mypage" render={props => <MyPage {...props} />} />
        <Route
          path="/issue/new"
          render={props => <PostIssuePage {...props} />}
        />
        <Route
          path="/issue/:id"
          render={props => <IssueDetailPage {...props} />}
        />
        <Route path="/" render={props => <Home {...props} />} />
      </Switch>
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes state={this.props.state} setState={this.props.setState} />
      </div>
    );
  }
}

export default App;
