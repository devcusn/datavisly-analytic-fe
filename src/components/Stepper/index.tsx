const WebsiteCreateStepper = ({
  activeStep,
}: {
  activeStep: "setup" | "installation" | "verify";
}) => {
  return (
    <div className="w-full md:w-1/3">
      <div className="sticky top-8">
        <h2 className="text-xl text-white font-medium mb-6">Setup Steps</h2>

        <div className="flex flex-col">
          {/* Step 1 */}
          <div className="flex items-start mb-8">
            <div
              className={`flex items-center justify-center min-w-8 h-8 rounded-full ${
                activeStep === "setup" ? "bg-orange-600" : "bg-gray-700"
              } text-${
                activeStep === "setup" ? "white" : "gray-400"
              } text-sm font-medium mr-3`}
            >
              1
            </div>
            <div className="flex flex-col">
              <span
                className={`${
                  activeStep === "setup" ? "text-white" : "text-gray-400"
                } font-medium`}
              >
                Add site info
              </span>
              <span className="text-gray-500 text-sm">
                Enter your website details
              </span>
            </div>
          </div>

          {/* Step line */}
          <div className="w-0.5 h-12 bg-gray-700 ml-4 -mt-4 mb-4"></div>

          {/* Step 2 */}
          <div className="flex items-start mb-8">
            <div
              className={`flex items-center justify-center min-w-8 h-8 rounded-full ${
                activeStep === "installation" ? "bg-orange-600" : "bg-gray-700"
              } text-${
                activeStep === "installation" ? "white" : "gray-400"
              } text-sm font-medium mr-3`}
            >
              2
            </div>
            <div className="flex flex-col">
              <span
                className={`${
                  activeStep === "installation" ? "text-white" : "text-gray-400"
                } font-medium`}
              >
                Install Datavisly
              </span>
              <span className="text-gray-400 text-sm">
                Add tracking code to your site
              </span>
            </div>
          </div>

          {/* Step line */}
          <div className="w-0.5 h-12 bg-gray-700 ml-4 -mt-4 mb-4"></div>

          {/* Step 3 */}
          <div className="flex items-start">
            <div
              className={`flex items-center justify-center min-w-8 h-8 rounded-full ${
                activeStep === "verify" ? "bg-orange-600" : "bg-gray-700"
              } text-${
                activeStep === "verify" ? "white" : "gray-400"
              } text-sm font-medium mr-3`}
            >
              3
            </div>
            <div className="flex flex-col">
              <span
                className={`${
                  activeStep === "verify" ? "text-white" : "text-gray-400"
                } font-medium`}
              >
                Verify installation
              </span>
              <span className="text-gray-500 text-sm">
                Confirm tracking is working
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WebsiteCreateStepper;
