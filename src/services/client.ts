import Cookies from "js-cookie";

export const requestConfig = {
  method: "get",
  baseURL: "https://fundtransferservicetest.azurewebsites.net",
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": Cookies.get("encryptToken"),
  },
  params: {},
};

// Axios.interceptors.response.use(
//   function (response: AxiosResponse) {
//     return response;
//   },
//   function (error: AxiosError) {
//     if (
//       error.response &&
//       (error.response.status === 401 || error.response.status === 410)
//     ) {
//       window.location.href = "/";
//       Cookies.remove("token");
//     }
//     if (error.response && error.response.data) {
//       if (error.response.data) {
//         return Promise.reject(error.response.data);
//       }
//       return Promise.reject(error.response.data);
//     }
//     return Promise.reject(error.message);
//   }
// );
