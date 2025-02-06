import axiosBase from "axios";

class MtApi {
  constructor() {
    this.axios = (() => {
      let axios = axiosBase.create({
        baseURL: "http://localhost:8080/api",
        //withCredentials: true,
      });
      return axios;
    })();

    // multipartリクエストの判定
    let multipartRequests = [];
    this.axios.interceptors.request.use((request) => {
      if (
        request.headers["content-type"] == "multipart/form-data" &&
        !multipartRequests.includes(request.url)
      ) {
        multipartRequests.push(request.url);
      }
      return request;
    });

    this.axios.interceptors.response.use(
      function (response) {
        return Promise.resolve(response);
      },
      function (error) {
        if (!axiosBase.isCancel(error)) {
          if (error.response) {
            const httpStatus = error.response.status;
            if (httpStatus === 401) {
              alert(error.response.data.message);
              location.reload();
            } else if (httpStatus === 503) {
              alert(error.message);
            }
            return Promise.reject(error);
          }
          if (multipartRequests.includes(error.config.url)) {
            return Promise.reject(error);
          }
          alert(error);
          location.reload();
        }
      }
    );
    this.auth = new __MtApiAuth(this.axios);
  }
}

class __MtApiAuth {
  constructor(axios) {
    this.axios = axios;
  }
  login(account, password) {
    return this.axios.get("/login", {
      params: {
        account: account,
        password: password,
      },
    });
  }
}

export default new MtApi();
