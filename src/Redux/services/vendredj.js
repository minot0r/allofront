import axios from "axios";

const API_URL = "https://kimonodvie-alloservice.herokuapp.com/";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const VendredjService = {
    registerForm(name, instagram, musicType) {
        return axiosClient
            .post('vendredj/register', {
                name,
                instagram,
                musicType,
            })
            .then((response) => {
                return response.data;
            });
    },
    getApplications(token) {
        return axiosClient
            .get('admin/applications', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                return response.data;
            });
    }
}

export default VendredjService;