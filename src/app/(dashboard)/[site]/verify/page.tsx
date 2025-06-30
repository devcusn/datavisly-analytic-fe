import WebsiteCreateStepper from "@/components/Stepper";
import { getSiteDetails } from "@/services/website/endpoints";
import Link from "next/link";

async function getPageData(siteName: string) {
  try {
    const detail = await getSiteDetails(siteName);
    return detail;
  } catch (error) {
    console.error("Error fetching site data:", error);
    throw new Error("Failed to load site data");
  }
}

const VerifyPage = async ({
  params,
}: {
  params: Promise<{ site: string }>;
}) => {
  const param = await params;
  const siteData = await getPageData(param.site);
  const isApproved = siteData && siteData.is_approved;

  return (
    <div className="min-h-screen flex mt-8 bg-gray-900">
      <div className="w-full max-w-6xl px-4 mx-auto flex flex-col md:flex-row gap-8">
        {/* Progress steps - vertical */}
        <WebsiteCreateStepper activeStep="verify" />
        {/* Main content */}
        <div className="w-full md:w-2/3">
          <div className="bg-gray-800 rounded-lg p-8">
            <h1 className="text-xl font-bold mb-6">Verify installation</h1>
            {isApproved ? (
              <div className="text-green-400">
                <p className="mb-4 text-lg font-semibold">
                  Your site is successfully approved! 🎉
                </p>
                <Link
                  href={`/${siteData.domain}`}
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Go to Dashboard
                </Link>
              </div>
            ) : (
              <p className="text-gray-300">Awaiting site approval...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
