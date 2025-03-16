import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8000/api/"
      : "https://backend-ldk0.onrender.com/api/",
  withCredentials: true,
});
