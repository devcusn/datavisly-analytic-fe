"use client";
import { useState } from "react";

const AddWebsitePage = () => {
  const [domain, setDomain] = useState("");
  const [timezone, setTimezone] = useState("(GMT+03:00) Europe/Istanbul");

  return (
    <div className="min-h-screen flex mt-8 justify-center bg-gray-900">
      <div className="w-full max-w-4xl px-4">
        {/* Progress steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white text-sm font-medium">
              1
            </div>
            <span className="ml-2 text-white font-medium">Add srite info</span>
          </div>

          <div className="flex items-center ml-8">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-400 text-sm font-medium">
              2
            </div>
            <span className="ml-2 text-gray-400 font-medium">
              Install Datavisly
            </span>
          </div>

          <div className="flex items-center ml-8">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-gray-400 text-sm font-medium">
              3
            </div>
            <span className="ml-2 text-gray-400 font-medium">
              Verify installation
            </span>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
          <h2 className="text-xl text-white font-medium mb-6">
            Add website info
          </h2>

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

          <div className="mb-8">
            <label className="block text-white mb-1">Reporting Timezone</label>
            <div className="text-gray-400 text-sm mb-2">
              To make sure we agree on what today means
            </div>
            <div className="relative">
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>(GMT+03:00) Europe/Istanbul</option>
                <option>(GMT+00:00) UTC</option>
                <option>(GMT-08:00) America/Los_Angeles</option>
                <option>(GMT-05:00) America/New_York</option>
                <option>(GMT+01:00) Europe/Paris</option>
                <option>(GMT+08:00) Asia/Singapore</option>
                <option>(GMT+09:00) Asia/Tokyo</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                .
              </div>
            </div>
          </div>

          <button className="w-full cursor-pointer bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
            Install Plausible
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWebsitePage;
