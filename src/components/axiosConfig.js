import axios from "axios";
export class BaseService {
  put = (url, model) => {
    return axios({
      url: ${process.env.REACT_APP_DB_BASE_URL}${url},
      method: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }, //JWT
    });
  };
  patch = (url, model) => {
    return axios({
      url: ${process.env.REACT_APP_DB_BASE_URL}${url},
      method: "PATCH",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }, //JWT
    });
  };

  post = (url, model) => {
    return axios({
      url: ${process.env.REACT_APP_DB_BASE_URL}${url},
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }, //JWT
    });
  };

  get = (url, params) => {
    return axios({
      url: ${process.env.REACT_APP_DB_BASE_URL}${url},
      params: { ...params } || null,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url, model = {}) => {
    return axios({
      url: ${process.env.REACT_APP_DB_BASE_URL}${url},
      method: "DELETE",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}