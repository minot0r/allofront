import axios from "axios";

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const PaymentService = {
  createIntent: (alloId, slotId, token) => {
    return axiosClient
      .post(
        "stripe/createIntent",
        {
          alloId,
          slotId,
        },
        {
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


export default PaymentService;