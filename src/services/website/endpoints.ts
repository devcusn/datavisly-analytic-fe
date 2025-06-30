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

export type SiteData = {
  id: string;
  domain: string;
  name: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
  url: string;
};
export const getSiteDetails = async (siteName: string): Promise<SiteData> => {
  const response = await request.get(`/website/${siteName}`);
  return response.data;
};
