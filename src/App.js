import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import PostIssuePage from "./PostIssuePage";
import Header from "./Header";

import "./App.css";

const Routes = withRouter(({ state, setState, history }) => {
  const handleClick = url => history.push(url);

  return (
    <div>
      <Header onClick={handleClick} />
      <Switch>
        <Route
          path="/"
          exact
          render={() => <Home state={state} setState={setState} />}
        />
        <Route
          path="/mypage"
          render={() => <MyPage state={state} setState={setState} />}
        />
        <Route
          path="/issue/new"
          render={() => <PostIssuePage state={state} setStaete={setState} />}
        />
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
