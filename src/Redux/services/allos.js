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
      });
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
      });
  },
  createAllo: (allo, token) => {
    return axiosClient
      .post("admin/createAllo", allo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  },
  getSlots: (alloId, token) => {
    return axiosClient
      .post(
        "allos/slots",
        {
          id: alloId,
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
  getSlot: (alloId, slotId, token) => {
    return axiosClient
      .post(
        "allos/slot",
        {
          id: alloId,
          slotId: slotId,
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
  reserveSlot: (alloId, slotId, token) => {
    return axiosClient
      .post(
        "allos/reserve",
        {
          id: alloId,
          slotId: slotId,
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
  unreserveSlot: (alloId, slotId, token) => {
    return axiosClient
      .post(
        "allos/unreserve",
        {
          id: alloId,
          slotId: slotId,
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
  validateSlot: (alloId, slotId, phone, token) => {
    return axiosClient
      .post(
        "allos/validate",
        {
          id: alloId,
          slotId: slotId,
          phone: `+33${phone}`,
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
  getReservedSlots: (token) => {
    return axiosClient
      .get(
        "allos/reserved",
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
  getRunningSlots: (token) => {
    return axiosClient
      .get(
        "admin/runningSlots",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  }
};

export default AllosService;
