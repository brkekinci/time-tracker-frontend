/* eslint-disable no-undef */
import axios from "axios";
import history from "../history.js";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer $2b$10$C1192ShKs.oLMsvOJw7F8.IqEC8s9AZ4cl0.0OF3CebNkl7.T3asa`;

    return config;
  },
  (err) => {
    console.log("REQUEST ERROR: ", err);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      // console.log(`%c ⚠ RESONSE MESSAGE ⚠ \n ${response.data.message}`, 'color:#00FF00');
    }
    return response;
  },
  (error) => {
    if (error.response.status == 401) {
      console.log(
        `%c ⚠ RESONSE ERROR MESSAGE ⚠ \n ${error.response.data.message}`,
        "color:#FFFF00"
      );
    } else if (error.response.status == 404 || error.response.status == 403) {
      console.log(
        `%c ⚠ RESONSE ERROR MESSAGE ⚠ \n ${error.response.data.message}`,
        "color:#FFFF00"
      );
    } else if (error.response.status == 500) {
      console.log(
        `%c ‼ RESONSE ERROR MESSAGE: ‼ \n ${error.response.data.message}`,
        "color:#FF0000"
      );
    }
    return Promise.reject(error);
  }
);

export default instance;
