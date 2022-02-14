import axios from "axios";

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/allos";

const AllosService = {
  getAllos: (login = false, token = null) => {
    return axios
      .get(
        `${API_URL}/${login ? "login/" : ""}all`,
        login && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
  getAllo: (id, login = false, token = null) => {
    return axios
      .get(
        `${API_URL}/${login ? "login/" : ""}allo/${id}`,
        login && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
};

export default AllosService;
