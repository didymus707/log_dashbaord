import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import Cookies from "js-cookie";

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
