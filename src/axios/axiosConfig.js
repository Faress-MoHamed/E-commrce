import axios from "axios";

const BASE_URL = "https://valuable-miracle-2550ada3ca.strapiapp.com/api";

const axiosConfig = axios.create({
	baseURL: BASE_URL,
});
axiosConfig.defaults.headers.common["Content-Type"] = "application/json";
axiosConfig.defaults.headers.common.Accept = "application/json";

export { axiosConfig };
