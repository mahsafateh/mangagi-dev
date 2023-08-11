import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";

const config = {
  baseUrl: "http://localhost:8080/Api/V1",
  token: getCookie("mangogi"),
  axiosHandle: () => {
    return axios.create({
      baseURL: config.baseUrl,
      validateStatus: function (status) {
        if (status == 401) {
          localStorage.clear();
          deleteCookie("mangogi");
        }
        return status >= 200 && status < 300;
      },
      headers: config.token
        ? {
            Authorization: config.token,
          }
        : {},
    });
  },
};
export default config;
