import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const onRequest = (config: InternalAxiosRequestConfig) => {
  // const token = JSON.parse(localStorage.getItem("token") ?? "{}");
  const token = localStorage.getItem("token");
  console.log("axios interceptors", token);

  if (config.headers !== undefined) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    // Access Token was expired
    if (error.response.status === 401) {
      // const storedToken = JSON.parse(localStorage.getItem("token") ?? "{}");

      // try {
      //   const rs = await axios.post(`${API_URL}/auth/refresh`, {
      //     refresh_token: storedToken.refresh_token
      //   });
      //
      //   const { token, user } = rs.data;
      //
      //   localStorage.setItem("token", JSON.stringify(token));
      //   localStorage.setItem("user", JSON.stringify(user));
      //
      //   return;
      // } catch (_error) {
      //   return Promise.reject(_error);
      // }
      console.log("un authorized token");
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
