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

  battle(userId) {
    return axios
      .post(`${this.baseUrl}:${this.port}/battle`, { id: userId })
      .then(res => {
        return res;
      })
      .catch(this.handleError);
  }

  getIssues() {
    // return axios
    //   .get(`${this.baseUrl}:${this.port}/issues`)
    //   .then(res => {
    //     return res;
    //   })
    //   .catch(this.handleError);
    const issuesMock = [
      {
        id: 1,
        title: "Controllerのここの書き方がわかりません",
        price: 1000,
        user: {
          id: 1,
          name: "Hiroki"
        }
      },
      {
        id: 2,
        title: "Controllerのここの書き方がわかりません",
        price: 1000,
        user: {
          id: 2,
          name: "Hiroki"
        }
      },
      {
        id: 3,
        title: "Controllerのここの書き方がわかりません",
        price: 1000,
        user: {
          id: 3,
          name: "Hiroki"
        }
      }
    ];
    this.mockAPI(issuesMock);
  }
}
