import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const coursesApi = {
    getAll: () => api.get('/course')
}

export default coursesApi;