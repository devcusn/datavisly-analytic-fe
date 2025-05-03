import { notFound } from "next/navigation";
import { checkSiteExists, getSiteDetails } from "@/services/website/endpoints";

async function getLayoutData(siteName: string) {
  try {
    const { exists } = await checkSiteExists(siteName);

    if (!exists) {
      return null;
    }
    const detail = await getSiteDetails(siteName);
    return detail;
  } catch (error) {
    console.error("Error fetching site data in layout:", error);
    throw new Error("Failed to load site data");
  }
}

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ site: string }>;
}) {
  // Fetch data server-side with proper cookie handling
  const param = await params;
  const siteData = await getLayoutData(param.site);

  if (!siteData) {
    notFound();
  }

  return <div className="site-layout">{children}</div>;
}
