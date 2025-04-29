import AxiosInterceptor from "./interceptor";

export const request = new AxiosInterceptor("http://localhost:4000/api/v1")
  .instance;
