import axios from "axios";
import { apiConfig } from "../constants/config";

const createAxiosInstance = (url, header = null) => {
  const config = {
    baseURL: url,
    headers: {
      Authorization: `Bearer ${apiConfig.token}`,
    },
  };

  if (header) {
    config.headers = Object.assign(config.headers, header);
  }
  const instance = axios.create(config);
  return instance;
};

export const Service = () => {
  const API = `${apiConfig.apiUrl}`;
  return {
    getAllProductsService: () =>
      createAxiosInstance(API, {
        "Content-Type": "application/json",
      }),
  };
};
