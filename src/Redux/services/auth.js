import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/auth/login";

const AuthService = {
  login: (username, password) => {
    return axios
      .post(API_URL, {
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
};

export default AuthService;
