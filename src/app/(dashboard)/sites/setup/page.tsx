"use client";
import WebsiteCreateStepper from "@/components/Stepper";
import { addWebsite } from "@/services/website/endpoints";
import { useState } from "react";

const AddWebsitePage = () => {
  const [domain, setDomain] = useState("");
  const [name, setName] = useState("");
  const addWebsiteHandler = async () => {
    const response = await addWebsite({
      domain: domain,
      name: name,
    });
    console.log(response);
  };
  return (
    <div className="min-h-screen flex mt-8 bg-gray-900">
      <div className="w-full max-w-4xl px-4 mx-auto flex flex-col md:flex-row gap-8">
        {/* Progress steps - now vertical */}
        <WebsiteCreateStepper />

        {/* Form card */}
        <div className="w-full md:w-2/3">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-xl text-white font-medium mb-6">
              Add website info
            </h2>
            <div className="mb-6">
              <label className="block text-white mb-1">Name</label>
              <div className="text-gray-400 text-sm mb-2">
                Name of your website
              </div>
              <input
                type="text"
                placeholder="My Awesome Website"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white mb-1">Domain</label>
              <div className="text-gray-400 text-sm mb-2">
                Just the naked domain or subdomain without www https etc.
              </div>
              <input
                type="text"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-medium transition-colors"
              onClick={addWebsiteHandler}
            >
              Continue to Installation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWebsitePage;
