import { redirect } from "next/navigation";
import { getSiteDetails } from "@/services/website/endpoints";
import AnalyticsClient from "./AnalyticsClient";

async function getPageData(siteName: string) {
  try {
    const detail = await getSiteDetails(siteName);
    return detail;
  } catch (error) {
    console.error("Error fetching site data:", error);
    throw new Error("Failed to load site data");
  }
}

export default async function AnalyticPage({
  params,
}: {
  params: Promise<{ site: string }>;
}) {
  const param = await params;

  const siteData = await getPageData(param.site);

  if (siteData && !siteData.is_approved) {
    redirect(`/${param.site}/installation`);
  }

  return <AnalyticsClient siteData={siteData} />;
}
