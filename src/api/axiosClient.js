import axios from "axios";

export const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

const axiosClient = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
