import axios from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? "heroku"
        : "http://localhost:5000/api";

export default axios.create({
    baseURL: URL,
});
