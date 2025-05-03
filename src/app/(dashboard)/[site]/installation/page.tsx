import WebsiteCreateStepper from "@/components/Stepper";
import InstallationForm from "./_ui/InstallationForm";
const InstallationPage = async ({
  params,
}: {
  params: Promise<{ site: string }>;
}) => {
  const param = await params;
  const site = param.site;
  return (
    <div className="min-h-screen flex mt-8 bg-gray-900">
      <div className="w-full max-w-6xl px-4 mx-auto flex flex-col md:flex-row gap-8">
        {/* Progress steps - vertical */}
        <WebsiteCreateStepper activeStep="installation" />
        <InstallationForm site={site} />
      </div>
    </div>
  );
};

export default InstallationPage;
