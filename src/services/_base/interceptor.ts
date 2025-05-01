import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

class AxiosInterceptor {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = this.createInstance(baseURL);
    this.api.defaults.withCredentials = true;
    this.setupInterceptors();
  }

  private createInstance(baseURL: string): AxiosInstance {
    return axios.create({ baseURL });
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized, redirecting...");
        }
        return Promise.reject(error);
      }
    );
  }

  public get instance(): AxiosInstance {
    return this.api;
  }
}

export default AxiosInterceptor;
