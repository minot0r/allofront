import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/auth";

const AuthService = {
  login: (username, password) => {
    return axios
      .post(`${API_URL}/login`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.success) {
          cookies.set("token", response.data.token, {
            path: "/",
            expires: new Date(response.data.expiresAt),
          });
          cookies.set("user", response.data.user, {
            path: "/",
            expires: new Date(response.data.expiresAt),
          });
        }
        return response.data;
      });
  },
  logout: () => {
    cookies.remove("token");
  },
  available: (username) => {
    return axios.post(`${API_URL}/available`, { username }).then((response) => {
      return response.data;
    });
  },
  register(name, username, password) {
    return axios
      .post(`${API_URL}/register`, {
        name,
        username,
        password,
      })
      .then((response) => {
        return response.data;
      });
  },
};

export default AuthService;
