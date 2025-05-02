import { notFound } from "next/navigation";
import { checkSiteExists, getSiteDetails } from "@/services/website/endpoints";
import AnalyticsClient from "./AnalyticsClient";

async function getPageData(siteName: string) {
  try {
    const { exists } = await checkSiteExists(siteName);

    if (!exists) {
      return null;
    }
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

  // Fetch data server-side with proper cookie handling
  const siteData = await getPageData(param.site);

  // If site doesn't exist, show 404
  if (!siteData) {
    notFound();
  }

  return <AnalyticsClient siteData={siteData} />;
}
