import axios from "axios";

export default class Api {
  constructor() {
    // if (process.env.REACT_APP_ENV == "local") {
    //   this.baseUrl = "http://localhost";
    //   this.port = 9000;
    // } else {
    //   this.baseUrl = "https://young-crag-23199.herokuapp.com";
    //   this.port = 443;
    // }
    // console.log(this.baseUrl, process.env);
    this.baseUrl = "https://jobhub2017.herokuapp.com";
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "token"
    );
    this.clientId = "0dc6379899bfb7eda0b0";
    this.clientSecret = "9070c0b950f0a3e4b24ca68863a71e9506fa46a1";
  }

  handleError(e) {
    console.error("[Api: error]", e);
    return Promise.reject(e);
  }

  mockAPI(data) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  challenge(issue_id) {
    return axios
      .post(`${this.baseUrl}/challenges`, { issue_id })
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }
  login(code) {
    return axios
      .post(`${this.baseUrl}/users`, { code })
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  getMypage() {
    return axios
      .get(`${this.baseUrl}/mypage`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
    // const mypageMock = {
    //   user: {
    //     name: "takahashi",
    //     id: 1
    //   },
    //   challenges: [
    //     {
    //       status: "challenging",
    //       issue: {
    //         title: "Controllerのここの書き方がわかりません",
    //         cost: 1000,
    //         issue_id: 1,
    //         owner_name: "kimu"
    //       },
    //       detail: "頑張りました",
    //       pull_request_url: "https://github.com/takahashi/test-repo/pull/2"
    //     }
    //   ],
    //   issues: [
    //     {
    //       id: 1,
    //       title: "Ruby help!",
    //       cost: 1000,
    //       status: "open"
    //     }
    //   ]
    // };
    // return this.mockAPI(mypageMock);
  }

  getIssueDetail(id) {
    return axios
      .get(`${this.baseUrl}/issues/${id}`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  getIssues() {
    return axios
      .get(`${this.baseUrl}/dashboard`)
      .then(res => {
        return res;
      })
      .catch(this.handleError);
    // const issuesMock = [
    //   {
    //     id: 1,
    //     title: "Controllerのここの書き方がわかりません",
    //     cost: 1000,
    //     user: {
    //       id: 1,
    //       name: "Hiroki"
    //     }
    //   },
    //   {
    //     id: 2,
    //     title: "Controllerのここの書き方がわかりません",
    //     cost: 1000,
    //     user: {
    //       id: 2,
    //       name: "Hiroki"
    //     }
    //   },
    //   {
    //     id: 3,
    //     title: "Controllerのここの書き方がわかりません",
    //     cost: 1000,
    //     user: {
    //       id: 3,
    //       name: "Hiroki"
    //     }
    //   }
    // ];
    // return this.mockAPI(issuesMock);
  }
}
