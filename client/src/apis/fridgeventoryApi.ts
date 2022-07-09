import axios from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? "/api"
        : "http://localhost:5000/api";

export default axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const postImage = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const productsApi = axios.create({
    baseURL: `${URL}/auth/product`,
    headers: {
        "Content-Type": "application/json",
    },
});
