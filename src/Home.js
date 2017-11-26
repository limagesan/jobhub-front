import React, { Component } from "react";
import IssuesList from "./IssuesList";
import { Grid, Segment, Divider, Loader } from "semantic-ui-react";
import "./Home.css";
// import soccerImg from "./assets/soccer.jpg";

const languagesMock = ["React", "Rails", "Java", "Python", "Javascrypt"];
class Home extends Component {
  constructor() {
    super();
    this.state = {
      issues: [],
      languages: languagesMock
    };
  }

  componentDidMount() {
    this.props.api
      .getIssues()
      .then(res => {
        console.log("res dashboard", res);
        if (res.data.message === "invalid access token") return;
        this.setState({ issues: res.data.issues });
      })
      .catch(err => {
        console.error(err);
      });
  }

  goIssueDetailPage(id) {
    this.props.history.push(`/issues/${id}`);
  }

  filterByLanguage(lang) {
    console.log("filterd", lang);
  }

  render() {
    return (
      <div className="Home">
        <div className="main-visual">
          <div className="main-visual-left">
            <h1 className="main-message">働き方が変わる、人生が変わる</h1>
          </div>
        </div>

        <div className="main-contents">
          <Grid>
            <Grid.Column width={4}>
              <LanguagesList
                onClick={this.filterByLanguage.bind(this)}
                languages={this.state.languages}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <h1 className="title">依頼案件</h1>
              <Segment>
                {this.state.issues.length ? (
                  <IssuesList
                    onClick={this.goIssueDetailPage.bind(this)}
                    issues={this.state.issues}
                  />
                ) : (
                  <Loader active={!this.state.issues.length} />
                )}
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

const LanguagesList = ({ onClick, languages }) => {
  const rows = languages.map((language, index) => {
    let divider = index === languages.length - 1 ? null : <Divider />;
    return (
      <div
        key={language}
        onClick={() => {
          onClick(language);
        }}
      >
        {language}
        {divider}
      </div>
    );
  });
  return (
    <Segment>
      <div>
        <h4>スキル検索一覧</h4>
        <Divider />
      </div>
      {rows}
    </Segment>
  );
};

export default Home;
