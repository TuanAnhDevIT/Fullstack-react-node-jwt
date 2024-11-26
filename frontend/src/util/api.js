import Password from "antd/es/input/Password";
import axios from "./axios.customize";

const createUserApi = (name, email, password) => {
  const URL = "/v1/api/register";
  const data = {
    name,
    email,
    password,
  };
  return axios.post(URL, data);
};

const loginApi = (email, password) => {
  const URL = "/v1/api/login";
  const data = {
    email,
    password,
  };
  return axios.post(URL, data);
};

const getUserApi = () => {
  const URL = "/v1/api/user";
  return axios.get(URL);
};

export { createUserApi, loginApi, getUserApi };
