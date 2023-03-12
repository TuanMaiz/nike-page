import axios from "axios";
import queryString from "query-string";
const header = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
}
const axiosClient = axios.create({ //tao mot instance cua axios
    baseURL: process.env.REACT_APP_API,
    headers: header,
    paramsSerializer: (params) => queryString.stringify(params),
  });

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
        return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);