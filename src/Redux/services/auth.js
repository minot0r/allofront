import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/auth";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const AuthService = {
  login: (username, password) => {
    return axiosClient
      .post('/login', {
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
    return axiosClient.post('/available', { username }).then((response) => {
      return response.data;
    });
  },
  register(name, username, password) {
    return axiosClient
      .post('/register', {
        name,
        username,
        password,
      })
      .then((response) => {
        return response.data;
      });
  },
  captchaVerify: (token) => {
    return axiosClient.post('captchaverify', { token }).then((response) => {
      return response.data.success;
    });
  },
};


export default AuthService;
