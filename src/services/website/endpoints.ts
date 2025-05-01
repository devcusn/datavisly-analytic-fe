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

export const checkSiteExists = async (siteName: string) => {
  try {
    const response = await request.get(`/website/exists/${siteName}`);
    return response.data;
  } catch (error) {
    console.error("Error checking if site exists:", error);
    return { exists: false };
  }
};

export const getSiteDetails = async (siteName: string) => {
  const response = await request.get(`/website/${siteName}`);
  return response.data;
};
