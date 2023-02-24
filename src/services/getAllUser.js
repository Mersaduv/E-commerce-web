import axios from "axios";

export function loginUser(data) {
  return axios.post("http://localhost:5000/api/user/login", data);
}
export function signupUser(data) {
  return axios.post("http://localhost:5000/api/user/register", data);
}
