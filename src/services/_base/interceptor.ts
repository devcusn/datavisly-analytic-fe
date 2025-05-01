// utils/axiosInterceptor.ts
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

class AxiosInterceptor {
  private api: AxiosInstance;
  private isServer: boolean;

  constructor(baseURL: string) {
    this.isServer = typeof window === "undefined";
    this.api = this.createInstance(baseURL);
    this.api.defaults.withCredentials = true;
    this.setupInterceptors();
  }

  private createInstance(baseURL: string): AxiosInstance {
    return axios.create({ baseURL });
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        if (this.isServer) {
          try {
            const { cookies } = await import("next/headers");
            try {
              const cookieStore = await cookies();
              const token = cookieStore.get("token");

              if (token && config.headers) {
                config.headers["Cookie"] = `token=${token.value}`;
              }
            } catch (error) {
              console.log(error);
              console.log(
                "Could not access server cookies, likely not in a server component context"
              );
            }
          } catch (error) {
            console.log(error);

            console.log(
              "Could not import next/headers, not in Next.js server environment"
            );
          }
        }

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
          // Burada yönlendirme veya oturum sonlandırma işlemi yapabilirsiniz
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
