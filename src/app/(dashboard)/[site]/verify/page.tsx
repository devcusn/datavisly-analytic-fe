"use client";

import WebsiteCreateStepper from "@/components/Stepper";

const VerifyPage = () => {
  return (
    <div className="min-h-screen flex mt-8 bg-gray-900">
      <div className="w-full max-w-6xl px-4 mx-auto flex flex-col md:flex-row gap-8">
        {/* Progress steps - vertical */}
        <WebsiteCreateStepper activeStep="verify" />
        {/* Main content */}
        <div className="w-full md:w-2/3">
          <div className="bg-gray-800 rounded-lg p-8">
            <h1 className="text-xl font-bold mb-6">Verify installation</h1>
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
