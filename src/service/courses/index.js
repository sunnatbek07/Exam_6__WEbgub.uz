import api from "../axios";

const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const coursesApi = {
    getAll: () => api.get('/course'),
    update: (id, formData, fileContent) => api.put(`/course/${id}?title&description`, { formData, fileContent }, { headers }),
    create: (values, fileContent) => api.post('/course', {values, fileContent}, {headers})
}

export default coursesApi;