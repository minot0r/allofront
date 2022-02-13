import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const API_URL = "http://api.giorgettivalentin.fr/auth/login";

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
  authHeader: () => {
    const token = cookies.get("token");
    if (token) {
      return { Authorization: `Bearer ${token}` };
    } else {
      return {};
    }
  },
};

export default AuthService;
