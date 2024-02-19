import axios from "axios";

export const api = axios.create({
  baseURL: "https://task-list-api-vrnr.onrender.com",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});
