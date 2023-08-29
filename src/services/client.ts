import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

export const transactionUrl = (url: string) =>
  `${process.env.REACT_APP_BASE_URL}${url}`;

export async function client(
  url: string,
  { data, method = "GET", ...customConfig }: AxiosRequestConfig = {}
) {
  const headers = { "content-type": "application/json" } as {
    "content-type": string;
    Authorization: string;
  };

  headers.Authorization = Cookies.get("token") ?? "";

  const config = {
    headers,
    method,
    data,
    url: `${process.env.REACT_APP_BASE_URL}/${url}`,
    ...customConfig,
  } as AxiosRequestConfig;

  try {
    const result = await Axios(config);
    const { data } = result;
    return data;
  } catch (error) {
    throw error;
  }
}

Axios.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 410)
    ) {
      window.location.href = "/login";
      Cookies.remove("token");
    }
    if (error.response && error.response.data) {
      if (error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);
