import axios from "axios";
import { setupInterceptorsTo } from "@/lib/axiosIntercepter";

const apiClient = setupInterceptorsTo(
  axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export default apiClient;
