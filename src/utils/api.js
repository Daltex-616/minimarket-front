import axios from "axios";
const API_URL = "http://localhost:4000/";

export const apiPost = (url, data) => {
  return axios.post(API_URL + url, data);
};

export const apiGet = async (url, token) => {
  const response = await axios
    .get(API_URL + url, {
      headers: { Authorization: "Bearer " + token },
    });
  return response;
};
