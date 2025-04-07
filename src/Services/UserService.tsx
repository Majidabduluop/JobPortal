import axios from "axios";
import { error } from "console";

const base_url = "http://localhost:8080/user/";
export const registerUser = async (user: any) => {
  return axios
    .post(`${base_url}register`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export const login = async (user: any) => {
  return axios
    .post(`${base_url}login`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
