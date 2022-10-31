import axios from "axios";
const API_URL = "http://localhost:4000/";

export const apiGet = (url, token) => {
  return axios.get(API_URL + url, {
    headers: { Authorization: "Bearer " + token },
  });
};

export const apiPost = (url, data) => {
  return axios.post(API_URL + url, data);
};
