import { request } from "../_base";

export type AnalyticResult = {
  page_views: Array<{ page: string; visitors: number }>;
};
export const getAnalytic = async (domain: string): Promise<AnalyticResult> => {
  const response = await request.get("collect", {
    params: {
      domain: domain,
    },
  });
  return response.data;
};
