import axios from "axios";

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/allos";

const AllosService = {
  getAllos: () => {
    return axios.get(`${API_URL}/all`).then((response) => {
      return response.data;
    });
  },
};

export default AllosService;
