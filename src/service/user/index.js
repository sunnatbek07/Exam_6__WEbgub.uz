import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
};

const userApi = {
    login: (data) => api.post("/user/login", data)
}