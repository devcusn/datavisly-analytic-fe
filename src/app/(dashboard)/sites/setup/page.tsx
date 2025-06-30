"use client";
import WebsiteCreateStepper from "@/components/Stepper";
import { addWebsite } from "@/services/website/endpoints";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
const AddWebsitePage = () => {
  const [domain, setDomain] = useState("");
  const [name, setName] = useState("");
  const [domainError, setDomainError] = useState("");
  const router = useRouter();
  const validateDomain = (value: string): boolean => {
    const domainRegex =
      /^([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

    if (!value) {
      setDomainError("Domain is required");
      return false;
    }

    if (value.includes("http") || value.includes("https")) {
      setDomainError("Please don't include http:// or https://");
      return false;
    }

    if (!domainRegex.test(value)) {
      setDomainError("Please enter a valid domain format");
      return false;
    }

    setDomainError("");
    return true;
  };

  const handleDomainChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDomain(value);
    validateDomain(value);
  };

  const addWebsiteHandler = async () => {
    if (validateDomain(domain) && name) {
      await addWebsite({
        domain: domain,
        name: name,
      });
      router.push(`/${domain}/installation`);
    }
  };

  return (
    <div className="min-h-screen flex mt-8 bg-gray-900">
      <div className="w-full max-w-4xl px-4 mx-auto flex flex-col md:flex-row gap-8">
        {/* Progress steps - now vertical */}
        <WebsiteCreateStepper activeStep="setup" />

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
                Just the naked domain or subdomain without https etc.
              </div>
              <input
                type="text"
                placeholder="example.com"
                value={domain}
                onChange={handleDomainChange}
                className={`w-full bg-gray-900 border ${
                  domainError ? "border-red-500" : "border-gray-700"
                } rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              />
              {domainError && (
                <p className="mt-1 text-red-500 text-sm">{domainError}</p>
              )}
              <p className="mt-2 text-gray-400 text-sm">
                Valid examples: domain.com, help.domain.com
              </p>
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
