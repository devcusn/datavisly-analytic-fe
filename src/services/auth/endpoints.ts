import { request } from "../_base";

type UserData = {
  email: string;
  password: string;
  fullName: string;
};
type LoginData = {
  email: string;
  password: string;
};

export const registerUser = async (userData: UserData) => {
  const response = await request.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData: LoginData) => {
  const response = await request.post("/auth/login", userData);
  return response.data;
};

export const logout = async () => {
  const response = await request.post("/auth/logout");
  return response.data;
};
