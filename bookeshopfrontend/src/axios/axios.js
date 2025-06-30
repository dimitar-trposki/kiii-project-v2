import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "http://localhost:8080",
    // baseURL: baseURL,
    baseURL: '/api',
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;