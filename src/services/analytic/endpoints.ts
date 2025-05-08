import { request } from "../_base";

export type AnalyticResult = {
  page_views: Array<{ page: string; visitors: number }>;
  uniq_visitors: number;
  total_visits: number;
  total_pages_views: number;
  devices: {
    browsers: Array<{ name: string; count: number }>;
    devices: Array<{ name: string; count: number }>;
    devices_type: Array<{ name: string; count: number }>;
  };
  currentVisitors: number;
  viewsPerVisit: number;
  referrers: Array<{ source: string; count: number }>;
};
export const getAnalytic = async (domain: string): Promise<AnalyticResult> => {
  const response = await request.get("collect", {
    params: {
      domain: domain,
    },
  });
  return response.data;
};
