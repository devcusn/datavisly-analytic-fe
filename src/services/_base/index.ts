import AxiosInterceptor from "./interceptor";

export const request = new AxiosInterceptor(
  process.env.NEXT_PUBLIC_BACKEND_API_URL as string
).instance;
