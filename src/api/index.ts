import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://ably-frontend-assignment-server.vercel.app",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
