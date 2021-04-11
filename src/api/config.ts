import Axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: "http://localhost:8080/rest/v1",
});

export default axiosInstance;
