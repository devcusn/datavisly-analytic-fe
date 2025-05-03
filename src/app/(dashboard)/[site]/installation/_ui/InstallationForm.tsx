"use client";
import { useState } from "react";
import { Clipboard, Info } from "lucide-react";
import { useRouter } from "next/navigation";

const InstallationPage = ({ site }: { site: string }) => {
  const [copied, setCopied] = useState(false);
  const [optionalMeasurements, setOptionalMeasurements] = useState({
    outboundLinks: false,
    fileDownloads: false,
    errorPages: false,
    hashedPagePaths: false,
    customEvents: false,
    customProperties: false,
  });

  const scriptSnippet = `<script defer data-domain="your_domain" src="https://www.datavisly.com/js/script.js"></script>`;
  const router = useRouter();
  const handleCopy = () => {
    navigator.clipboard.writeText(scriptSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckboxChange = (key: keyof typeof optionalMeasurements) => {
    setOptionalMeasurements({
      ...optionalMeasurements,
      [key]: !optionalMeasurements[key],
    });
  };

  return (
    <>
      {/* Main content */}
      <div className="w-full md:w-2/3">
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-xl font-bold mb-6">Manual installation</h1>

          <p className="text-md mb-6">
            Paste this snippet into the &lt;head&gt; section of your site. See
            our{" "}
            <a
              href="#"
              className="text-indigo-400 hover:underline flex items-center"
            >
              installation guides
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                className="ml-1 inline"
              >
                <path
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>{" "}
            Once done, click the button below to verify your installation.
          </p>

          <div className="relative bg-[#1e2230] border border-gray-700 rounded-lg p-5 mb-6">
            <pre className="text-sm text-gray-300 font-mono overflow-x-auto pb-2">
              {scriptSnippet}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 text-indigo-400 hover:text-indigo-300"
              aria-label="Copy to clipboard"
            >
              <div className="flex items-center">
                {copied ? "COPIED" : "COPY"}
                <Clipboard className="ml-2 h-5 w-5" />
              </div>
            </button>
          </div>

          <h2 className="text-lg font-semibold mb-4">
            Enable optional measurements:
          </h2>

          <div className="space-y-4 mb-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-500"
                checked={optionalMeasurements.outboundLinks}
                onChange={() => handleCheckboxChange("outboundLinks")}
              />
              <span className="text-white">Outbound links</span>
              <Info className="h-4 w-4 text-gray-400" />
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-500"
                checked={optionalMeasurements.fileDownloads}
                onChange={() => handleCheckboxChange("fileDownloads")}
              />
              <span className="text-white">File downloads</span>
              <Info className="h-4 w-4 text-gray-400" />
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-500"
                checked={optionalMeasurements.errorPages}
                onChange={() => handleCheckboxChange("errorPages")}
              />
              <span className="text-white">404 error pages</span>
              <Info className="h-4 w-4 text-gray-400" />
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-500"
                checked={optionalMeasurements.hashedPagePaths}
                onChange={() => handleCheckboxChange("hashedPagePaths")}
              />
              <span className="text-white">Hashed page paths</span>
              <Info className="h-4 w-4 text-gray-400" />
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-500"
                checked={optionalMeasurements.customEvents}
                onChange={() => handleCheckboxChange("customEvents")}
              />
              <span className="text-white">Custom events</span>
              <Info className="h-4 w-4 text-gray-400" />
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-500"
                checked={optionalMeasurements.customProperties}
                onChange={() => handleCheckboxChange("customProperties")}
              />
              <span className="text-white">Custom properties</span>
              <Info className="h-4 w-4 text-gray-400" />
            </label>
          </div>
          <button
            onClick={() => {
              router.push(`/${site}/verify`);
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md w-full cursoor-pointer"
          >
            Start collecting data
          </button>
        </div>
      </div>
    </>
  );
};

export default InstallationPage;
