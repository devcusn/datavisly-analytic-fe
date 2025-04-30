import { request } from "../_base";

export const deleteAccount = async () => {
  const response = await request.delete("/account");
  return response.data;
};

export const updateName = async (name: string) => {
  const response = await request.put("/account/name", { name });
  return response.data;
};

export const updateEmail = async (email: string, password: string) => {
  const response = await request.put("/account/email", { email, password });
  return response.data;
};

export const updatePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const response = await request.put("/account/password", {
    oldPassword,
    newPassword,
  });
  return response.data;
};
