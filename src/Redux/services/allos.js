import axios from "axios";

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const AllosService = {
  getAllos: (login = false, token = null) => {
    return axiosClient
      .get(
        `allos/${login ? "login/" : ""}all`,
        login && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
  },
  getAllo: (id, login = false, token = null) => {
    return axiosClient
      .get(
        `allos/${login ? "login/" : ""}allo/${id}`,
        login && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
  },
  createAllo: (allo, token) => {
    return axiosClient
      .post(
        "admin/createAllo",
        allo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
  }
};

export default AllosService;
