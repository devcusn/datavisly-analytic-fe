import { request } from "../_base";

type WebsiteData = {
  domain: string;
  name: string;
};

export const addWebsite = async (userData: WebsiteData) => {
  const response = await request.post("/website", userData);
  return response.data;
};

export const getWebsSites = async () => {
  const response = await request.get("/website/account");
  return response.data;
};
